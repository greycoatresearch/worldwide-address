import {
  countries,
  loadLabels,
  loadZoneNames,
  loadZones,
  meta,
  type Country,
  type CountryCode,
  type FieldName,
} from "@greycoatresearch/worldwide-address-data";
import { useMemo, useState } from "react";
import { pickLocale } from "./locale.ts";
import { useAsync } from "./useAsync.ts";
import { useQueryState } from "./useQueryState.ts";

type Values = Partial<Record<FieldName, string>>;

/** Schema field → Customer Account API `CustomerAddressInput` field */
const API_FIELDS: Record<Exclude<FieldName, "country">, string> = {
  firstName: "firstName",
  lastName: "lastName",
  company: "company",
  address1: "address1",
  address2: "address2",
  city: "city",
  province: "zoneCode",
  zip: "zip",
  phone: "phoneNumber",
};

/** Only fields in the current layout are sent; zoneCode only exists for countries with zones */
function toAddressInput(countryCode: CountryCode, country: Country, values: Values) {
  const input: Record<string, string> = { countryCode };
  for (const field of country.layout.flat()) {
    if (field === "country") continue;
    const value = values[field]?.trim();
    if (value) input[API_FIELDS[field]] = value;
  }
  return input;
}

const DEFAULT_COUNTRY = "KR";

/** ?lang= must be a label locale; without it, use the browser language */
const parseLang = (raw: string | null) =>
  raw && meta.locales.labels.includes(raw)
    ? raw
    : (pickLocale(navigator.language, meta.locales.labels) ?? "en");

/** ?country= must be a known country code */
const parseCountry = (raw: string | null) => {
  const code = raw?.toUpperCase();
  return code && Object.hasOwn(countries, code) ? code : DEFAULT_COUNTRY;
};

export function App() {
  const [locale, setLocale] = useQueryState("lang", parseLang);
  const [countryCode, setCountryCode] = useQueryState("country", parseCountry);
  const [values, setValues] = useState<Values>({});
  const country = countries[countryCode]!;

  const labelLocale = pickLocale(locale, meta.locales.labels);
  const zoneLocale = pickLocale(locale, meta.locales.zones);

  const labels = useAsync(
    async () => (labelLocale ? loadLabels(labelLocale) : undefined),
    [labelLocale],
  );
  const zones = useAsync(() => loadZones(countryCode), [countryCode]);
  const zoneNames = useAsync(
    async () => new Map(zoneLocale ? await loadZoneNames(zoneLocale, countryCode) : undefined),
    [zoneLocale, countryCode],
  );

  // The data has no country names; the browser's CLDR data provides them
  const countryOptions = useMemo(() => {
    const names = new Intl.DisplayNames([locale], { type: "region" });
    const collator = new Intl.Collator(locale);
    return Object.keys(countries)
      .map((code) => ({ code, name: names.of(code) ?? code }))
      .sort((a, b) => collator.compare(a.name, b.name));
  }, [locale]);

  /** Default label merged with the country override; optionalLabel when not required */
  const labelOf = (field: FieldName) => {
    const l = { ...labels?.default[field], ...labels?.countries[countryCode]?.[field] };
    return (country.required.includes(field) ? l.label : (l.optionalLabel ?? l.label)) ?? field;
  };

  const set = (field: FieldName, value: string) => setValues((v) => ({ ...v, [field]: value }));

  const changeCountry = (code: CountryCode) => {
    setCountryCode(code);
    // Zone codes belong to a country; other values carry over
    setValues((v) => {
      const next = { ...v };
      delete next.province;
      return next;
    });
  };

  const control = (field: FieldName) => {
    const required = country.required.includes(field);
    switch (field) {
      case "country":
        return (
          <select value={countryCode} onChange={(e) => changeCountry(e.target.value)}>
            {countryOptions.map(({ code, name }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        );
      case "province":
        return (
          <select
            value={values.province ?? ""}
            required={required}
            onChange={(e) => set("province", e.target.value)}
          >
            <option value="" />
            {zones?.map((zone) => (
              <option key={zone.code} value={zone.code}>
                {zoneNames?.get(zone.code) ?? zone.name}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            value={values[field] ?? ""}
            required={required}
            onChange={(e) => set(field, e.target.value)}
          />
        );
    }
  };

  return (
    <main lang={locale}>
      <header>
        <h1>worldwide-address example</h1>
        <label>
          UI language{" "}
          <select value={locale} onChange={(e) => setLocale(e.target.value)}>
            {meta.locales.labels.map((tag) => (
              <option key={tag} value={tag}>
                {new Intl.DisplayNames([tag], { type: "language" }).of(tag)}
              </option>
            ))}
          </select>
        </label>
        <p className="note">
          labels: {labelLocale ?? "none"} · zone names: {zoneLocale ?? "none"}
        </p>
      </header>

      <div className="columns">
        <form onSubmit={(e) => e.preventDefault()}>
          {country.layout.map((row) => (
            <div className="row" key={row.join()}>
              {row.map((field) => (
                <label className="field" key={field}>
                  <span>{labelOf(field)}</span>
                  {control(field)}
                </label>
              ))}
            </div>
          ))}
        </form>

        <section>
          <h2>CustomerAddressInput</h2>
          <pre>{JSON.stringify(toAddressInput(countryCode, country, values), null, 2)}</pre>
        </section>
      </div>
    </main>
  );
}

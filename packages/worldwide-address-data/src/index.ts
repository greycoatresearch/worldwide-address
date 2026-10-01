/**
 * Address form data derived from Shopify/worldwide.
 *
 * `countries` and `meta` are bundled statically. The rest is loaded on demand: zones one module
 * per country, zone names and labels one module per locale.
 *
 * Locales match exactly as listed in `meta.locales`; no fallback is applied.
 */
import countriesData from "../data/v1/countries.js";
import { labels as labelLoaders, zoneNames as zoneNameLoaders } from "../data/v1/locales/index.js";
import metaData from "../data/v1/meta.js";
import zoneLoaders from "../data/v1/zones/index.js";
import type {
  CountriesFile,
  CountryCode,
  LabelsFile,
  Locale,
  LocalizedZones,
  LocalizedZonesFile,
  MetaFile,
  ZonesFile,
} from "./schema.ts";

export type * from "./schema.ts";

export const meta = metaData as MetaFile;
export const countries = countriesData as CountriesFile;

type Loader<T> = () => Promise<{ default: T }>;

async function load<T>(loaders: Record<string, Loader<T>>, key: string): Promise<T | undefined> {
  return Object.hasOwn(loaders, key) ? (await loaders[key]!()).default : undefined;
}

/** Zones of a country in upstream order, or undefined if the country has no zones */
export async function loadZones(country: CountryCode): Promise<ZonesFile | undefined> {
  return (await load(zoneLoaders, country)) as ZonesFile | undefined;
}

/** Translated zone names, or undefined if the locale has none for this country */
export async function loadZoneNames(
  locale: Locale,
  country: CountryCode,
): Promise<LocalizedZones | undefined> {
  // One module per locale holds every country, so switching countries loads nothing new
  const byCountry = (await load(zoneNameLoaders, locale)) as LocalizedZonesFile | undefined;
  return byCountry && Object.hasOwn(byCountry, country) ? byCountry[country] : undefined;
}

/** Field labels for a locale (defaults plus per-country overrides), or undefined if unavailable */
export async function loadLabels(locale: Locale): Promise<LabelsFile | undefined> {
  return (await load(labelLoaders, locale)) as LabelsFile | undefined;
}

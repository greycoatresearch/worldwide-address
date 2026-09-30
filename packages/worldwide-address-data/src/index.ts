/**
 * Address form data derived from Shopify/worldwide.
 *
 * `countries` and `meta` are bundled statically. Zones, zone names and labels are loaded on
 * demand, one module per country or locale, so bundlers only ship what is actually requested.
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
): Promise<LocalizedZonesFile | undefined> {
  const byCountry = await load(zoneNameLoaders, locale);
  return byCountry && ((await load(byCountry, country)) as LocalizedZonesFile | undefined);
}

/** Field labels for a locale (defaults plus per-country overrides), or undefined if unavailable */
export async function loadLabels(locale: Locale): Promise<LabelsFile | undefined> {
  return (await load(labelLoaders, locale)) as LabelsFile | undefined;
}

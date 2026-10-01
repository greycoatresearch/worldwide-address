import { useState } from "react";

/**
 * A string state mirrored in the query string. `parse` turns the raw parameter (null if absent)
 * into a valid value, so a bad or missing parameter falls back to a default.
 * Updates replace the current history entry instead of pushing a new one.
 */
export function useQueryState(
  key: string,
  parse: (raw: string | null) => string,
): [string, (value: string) => void] {
  const [value, setValue] = useState(() => parse(new URLSearchParams(location.search).get(key)));

  const update = (next: string) => {
    setValue(next);
    const url = new URL(location.href);
    url.searchParams.set(key, next);
    history.replaceState(history.state, "", url);
  };

  return [value, update];
}

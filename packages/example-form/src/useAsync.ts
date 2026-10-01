import { useEffect, useState } from "react";

/** Runs `load` whenever `deps` change and returns its latest result (undefined while loading) */
export function useAsync<T>(load: () => Promise<T>, deps: readonly unknown[]): T | undefined {
  const [value, setValue] = useState<T>();
  useEffect(() => {
    let current = true;
    setValue(undefined);
    load().then((v) => {
      if (current) setValue(v);
    });
    return () => {
      current = false;
    };
  }, deps);
  return value;
}

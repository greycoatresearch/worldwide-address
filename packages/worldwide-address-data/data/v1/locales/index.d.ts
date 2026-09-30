type Loader<T> = () => Promise<{ default: T }>;
export declare const labels: Record<string, Loader<unknown>>;
export declare const zoneNames: Record<string, Loader<Record<string, Loader<unknown>>>>;

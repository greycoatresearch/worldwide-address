type Loader<T> = () => Promise<{ default: T }>;
declare const zones: Record<string, Loader<unknown>>;
export default zones;

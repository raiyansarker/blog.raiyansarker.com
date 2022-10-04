/**
 * Env variable helper
 * This is basically a wrapper/helper to retrive data from process
 * @param key string
 * @param defaultValue empty string
 * @returns string
 */
const Env = <T>(key: string, defaultValue: T): string | T => {
  const value: string | T =
    process.env[key] !== undefined
      ? (process.env[key] as string)
      : defaultValue;

  return value;
};

export default Env;

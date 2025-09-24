export function dashToCamelCase(v: string | undefined) {
  if (v === undefined) return "";
  return v.replace(/-./g, (str) => str[1].toUpperCase());
}

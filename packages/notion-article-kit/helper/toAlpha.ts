export function toAlpha(num: number): string {
  let result = "";
  while (num > 0) {
    num--; // 1-based index 보정
    result = String.fromCharCode(97 + (num % 26)) + result;
    num = Math.floor(num / 26);
  }
  return result;
}

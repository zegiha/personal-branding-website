export function cn(...args: (string | undefined)[]) {
  return args.filter(v => v !== undefined).join(' ');
}
export function firstCharacterToUpperCase(v: string) {
	return v.replace(/^./, (str) => str.toUpperCase());
}

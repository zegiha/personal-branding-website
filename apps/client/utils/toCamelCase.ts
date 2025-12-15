export const toCamelCase = (v: string) => {
  let res = '', sw = false;
  const arr = Array.from(v)
  for(const v of arr) {
    if(v === '_') {
      sw = true;
    } else {
      if(sw) res += v.toUpperCase()
      else res += v
      sw = false;
    }
  }

  return res
 }
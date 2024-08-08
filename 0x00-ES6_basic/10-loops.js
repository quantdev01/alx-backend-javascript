export default function appendToEachArrayValue(array, appendString) {
  const newarray = [];
  let i = 0;
  for (const idx of array) {
    newarray[i] = appendString + idx;
    i += 1;
  }

  return newarray;
}

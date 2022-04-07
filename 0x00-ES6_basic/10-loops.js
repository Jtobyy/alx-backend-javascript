export default function appendToEachArrayValue(array, appendString) {
  const myarray = [];
  for (const idx of array) {
    myarray.push(appendString + idx);
  }

  return myarray;
}

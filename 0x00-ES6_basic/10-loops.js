export default function appendToEachArrayValue(array, appendString) {
  const myarray = array;
  for (const idx of myarray) {
    myarray[myarray.findIndex((val) => val === idx)] = appendString + idx;
  }

  return myarray;
}

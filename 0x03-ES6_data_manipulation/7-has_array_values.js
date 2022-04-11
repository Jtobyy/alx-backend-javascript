export default function hasValueFromArray(set, array) {
  const setArray = [...set];
  for (const el of array) {
    if (!setArray.includes(el)) {
      return false;
    }
  }
  return true;
}

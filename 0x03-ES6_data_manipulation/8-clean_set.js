export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let myString = '';
  const spliceLength = startString.length;
  set.forEach((el) => {
    if (el.startsWith(startString) === true) {
      myString += `${[...el].splice(spliceLength).join('')}-`;
    }
  });
  const stringArray = [...myString];
  stringArray.pop();
  return stringArray.join('');
}

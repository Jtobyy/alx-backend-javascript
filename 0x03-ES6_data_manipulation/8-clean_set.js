export default function cleanSet(set, startString) {
  if (startString === '' || startString === undefined || typeof startString !== 'string') {
    return '';
  }
  let myString = '';
  const spliceLength = startString.length;
  set.forEach((el) => {
    if (el === undefined) {
      myString += '';
    } else if (el.startsWith(startString) === true) {
      myString += `${[...el].splice(spliceLength).join('')}-`;
    }
  });
  const stringArray = [...myString];
  while (stringArray[0] === '-') {
    stringArray.shift();
  }
  stringArray.pop();
  return stringArray.join('');
}

export default function cleanSet(set, startString) {
  const myArray = [...set];
  let myString = '';
  const spliceLength = startString.length;
  myArray.forEach((el) => {
    if (el.startsWith(startString) === true) {
      myString += `${[...el].splice(spliceLength).join('')}-`;
    }
  });
  const stringArray = [...myString];
  stringArray.pop();
  return stringArray.join('');
}

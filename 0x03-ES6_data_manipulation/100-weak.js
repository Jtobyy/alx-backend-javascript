const weakMap = new WeakMap();

function* iterator() {
  let i = 0;
  while (i < 6) {
    yield i += 1;
  }
}

const iter = iterator();

function queryAPI(endpoint) {
  const counter = iter.next().value;
  if (counter < 5) {
    weakMap.set(endpoint, counter);
  } else {
    throw Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };

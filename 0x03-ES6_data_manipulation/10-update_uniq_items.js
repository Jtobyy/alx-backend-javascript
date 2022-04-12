export default function updateUniqueItems(map) {
  try {
    for (const key of map.keys()) {
      if (map.get(key) === 1) {
        map.set(key, 100);
      }
    }
  } catch (e) {
    throw Error('Cannot process');
  }
}

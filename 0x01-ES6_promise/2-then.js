export default function handleResponseFromAPI(promise) {
  const myPromise = promise
    .then(() => ({ body: 'success', status: 200 }))
    .catch(() => (Error()))
    .finally(() => console.log('Got a response from the API'));
  return myPromise;
}

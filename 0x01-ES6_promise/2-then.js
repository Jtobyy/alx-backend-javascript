export default function handleResponseFromAPI(promise) {
  promise
  .then(value => {
    return {status: 200, body: success};
  })
  .then(null, () => {
    return Error();
  })
  .finally(console.log('Got a response from the API'));
}
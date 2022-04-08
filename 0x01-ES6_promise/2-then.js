export default function handleResponseFromAPI(promise) {
  promise
  .then((value) => {
    return {status: 200, body: success};
  })
  .catch((reason) => {
    return Error();
  })
  .finally(console.log('Got a response from the API'));
}

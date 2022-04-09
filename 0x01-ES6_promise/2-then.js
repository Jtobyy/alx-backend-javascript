export default function handleResponseFromAPI(promise) {
  promise
  .then((value) => {
    return { body: 'success', status: 200 };
  })
  .catch((reason) => {
    return Error();
  })
  .finally(console.log('Got a response from the API'));
}

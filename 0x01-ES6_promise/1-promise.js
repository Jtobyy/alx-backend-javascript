export default function getFullResponseFromAPI(success) {
  let myPromise = null;
  if (success === true) {
    myPromise = Promise.resolve({ status: 200, body: 'Success' });
  } else if (success === false) {
    myPromise = Promise.reject(Error('The fake API is not working currently'));
  }
  return myPromise;
}

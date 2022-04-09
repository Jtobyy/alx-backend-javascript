import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const myArray = [];
  let myObj = {};
  const myPromise = Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((objArr) => {
      objArr.forEach((obj) => {
        if (obj.status === 'rejected') {
          myObj = { status: obj.status, value: `Error: ${obj.reason.message}` };
        } else {
          myObj = { status: obj.status, value: obj.value };
        }
        myArray.push(myObj);
      });
      return myArray;
    });
  return myPromise;
}

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const myArr = [];
  function myFunc(func, ...args) {
    return func(args)
      .then((obj) => ({ status: 'resolved', value: obj }))
      .catch((obj) => ({ status: 'rejected', value: obj }));
  }
  myArr.push(myFunc(signUpUser, firstName, lastName));
  myArr.push(myFunc(uploadPhoto, fileName));
  return myArr;
}

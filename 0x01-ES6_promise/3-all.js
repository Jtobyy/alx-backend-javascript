import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const myPromise = Promise.all([uploadPhoto(), createUser()])
    .then((objs) => {
      console.log(`${objs[0].body} ${objs[1].firstName} ${objs[1].lastName}`);
      return null;
    })
    .catch(() => { console.log('Signup system offline'); });
  return myPromise;
}

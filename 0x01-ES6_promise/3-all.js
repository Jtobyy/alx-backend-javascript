import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((objs) => (console.log(`${objs[0].body} ${objs[1].firstName} ${objs[1].lastName}`)), () => console.log('Signup system offline'));
}

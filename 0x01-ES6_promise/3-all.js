import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;

  const response = uploadPhoto();

  response
    .then((data) => data.body)
    .then((data) => {
      body = data;
      return createUser();
    })
    .then((data) => {
      firstName = data.firstName;
      lastName = data.lastName;
      console.log(body, firstName, lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

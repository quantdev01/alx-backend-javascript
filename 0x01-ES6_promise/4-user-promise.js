export default function signUpUser(firstName, lastName) {
  const userPromise = new Promise(
    (resolve) => {
      resolve(
        {
          firstName,
          lastName,
        },
      );
    },
  );
  return userPromise;
}

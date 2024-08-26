export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Worked fine');
    } else {
      reject(new Error('Error'));
    }
  });
  return myPromise;
}

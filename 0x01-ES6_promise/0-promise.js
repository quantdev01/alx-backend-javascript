export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    resolve('Worked fine');
  });
  return myPromise;
}

export default function returnHowManyArguments(...args) {
  let result = 0;
  for (let arg of args) {
    result += 1;
    if (arg === args.length) arg = 4;
  }
  return result;
}

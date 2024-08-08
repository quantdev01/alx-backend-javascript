export default function iterateThroughObject(reportWithIterator) {
  const array = [...reportWithIterator];
  return array.join(' | ');
}

export default function taskBlock(trueOrFalse) {
  const task3 = false;
  const task4 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
    task = task2;
    task2 = task;
  }

  return [task3, task4];
}

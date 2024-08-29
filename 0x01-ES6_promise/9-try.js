export default function guardrail(mathFunction) {
  let queue = [];
  queue.push(mathFunction);
  queue.push('Guardail was processed');
  return queue;
}

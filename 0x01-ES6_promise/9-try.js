export default function guardrail(mathFunction) {
  const queue = [];
  let result = null;

  try {
    result = mathFunction();
    queue.push(result);
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  }
  queue.push('Guardrail was processed');

  return queue;
}

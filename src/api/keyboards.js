
export async function getKeyboards() {
  const response = await fetch('../resources/keyboards.json');
  return await response.json();
}

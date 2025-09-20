
export async function getKeyboards(route) {
  const response = await fetch(route);
  return await response.json();
}

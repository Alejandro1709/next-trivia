export async function getTrivias() {
  const response = await fetch('https://opentdb.com/api.php?amount=10');
  return response.json();
}

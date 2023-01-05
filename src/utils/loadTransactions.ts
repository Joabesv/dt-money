// plans to make this type safe
export async function loadTransactions() {
  const url = import.meta.env.VITE_SERVER_URL;
  const response = await fetch(`${url}/transactions`);
  const data = await response.json();
  return data;
}

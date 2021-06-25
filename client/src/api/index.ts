export const get = async (endpoint: string) => {
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Unable to fetch ${endpoint}`);
  }

  const data = await response.json();

  return data;
};

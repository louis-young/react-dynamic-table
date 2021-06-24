import fetch from "node-fetch";

export const get = async (endpoint: string) => {
  const response = await fetch(endpoint);

  const data = await response.json();

  return data;
};

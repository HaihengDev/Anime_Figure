const apiUrl = import.meta.env.VITE_API_KEY;

export const getAllProducts = async (path: string) => {
  const response = await fetch(`${apiUrl}/${path}`);

  return response.json();
};

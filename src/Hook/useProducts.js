import { useState, useEffect } from "react";

export const useProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_KEY)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [import.meta.env.VITE_API_KEY]);

  return data;
};

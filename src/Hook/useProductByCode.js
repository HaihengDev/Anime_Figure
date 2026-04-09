import { useState, useEffect } from "react";

export const useProductByCode = (code) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_KEY + String(code))
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [code]);

  return data;
};

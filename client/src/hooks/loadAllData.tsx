import { useState, useEffect } from 'react';
import { getAll } from '../endpoints/api';

export default function loadAllData(path: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getAll(path);
        setData(data);
      } catch (err) {
        setError(`Failed to fetch data: ${err}`);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [path]);

  return { data, loading, error };
}

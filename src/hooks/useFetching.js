import {useState} from "react";

export const useFetching = (clb) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setLoading(true);
      await clb();
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return [fetching, loading, error];
}

import { useEffect, useState } from "react";

const getApiEndpoint = (path: string) => `https://fakestoreapi.com/${path}`;

type UseFetchProps = {
  path: string;
};

export const useFetch = <T extends {}>({ path }: UseFetchProps) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(getApiEndpoint(path));
        const resJson = await res.json();

        setData(resJson);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [path]);

  return {
    data,
    error,
    loading,
  };
};

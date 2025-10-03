import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isMounted = true; // чтобы избежать ошибок при размонтировании

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);

        if (!res.ok) throw new Error("Ошибка запроса");

        const json = await res.json();
        if (isMounted) setData(json);
      } catch {
        if (isMounted) setIsError(true);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isLoading, isError };
};

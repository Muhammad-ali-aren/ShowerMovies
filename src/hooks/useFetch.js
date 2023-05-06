import { useState, useEffect } from "react";

export const useFetch = (apiPath, querySearched = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=fd3abfce8b8e717df47c31bdfa643884&query=${querySearched}`;
  useEffect(() => {
    async function fetchMovies() {
      const respose = await fetch(url);
      const dataRes = await respose.json();
      setData(dataRes.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
};

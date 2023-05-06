import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
export const Search = ({ apiPath }) => {
  const [searchedParams] = useSearchParams();
  const querySearched = searchedParams.get("q");
  const { data: movies } = useFetch(apiPath, querySearched);
  useEffect(() => {
    document.title = ` results for ${querySearched}`;
  });
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No Result Found For '${querySearched}'`
            : `Results For '${querySearched}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

import { Link } from "react-router-dom";
import notFound from "../assets/images/notFound.jpg";
import { useEffect } from "react";
export const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page not Found";
  });
  return (
    <main>
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="font-bold my-10 text-7xl text-gray-700 dark:text-white">
            404 Opps!
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={notFound} alt="not page found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="">
            <button className=" px-5 py-1 m-2 rounded-lg w-64 text-xl text-white font-medium bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
              Back to Home Page
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

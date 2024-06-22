import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import key from "../api/key";
import PropagateLoader from "react-spinners/PropagateLoader";
const swal = require("sweetalert2");

function NewsPost() {
  const { encodedUrl } = useParams();
  const url = decodeURIComponent(encodedUrl);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = "general";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let apiUrl = `https://gnews.io/api/v4/top-headlines?country=us&sortby=publishedAt&lang=en&category=${category}&apikey=${key}`;
        const res = await axios.get(apiUrl);
        setArticles(res.data.articles);
        console.log(article);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
        swal.fire({
          title: "Something Went Wrong",
          icon: "error",
          toast: true,
          timer: 6000,
          position: "top-right",
          timerProgressBar: false,
          showConfirmButton: false,
        });
      }
    };

    fetchData();
  }, []);

  const article = articles.find((article) => article.url === url);

  if (loading) {
    return (
      <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
        <PropagateLoader color="#3B82F6" speedMultiplier={1.5} />
      </div>
    );
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  if (!article) {
    return <p>Article not found</p>;
  }
  return (
    <>
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          {/* Content */}
          <figure>
            {article?.image ? (
              <img
                className="w-full object-cover rounded-xl"
                src={article?.image}
                alt="Image Description"
              />
            ) : (
              <img
                className="w-full object-cover rounded-xl h-[200px] placeholder-image article-image"
                src="https://www.mundusnews.com/sites/default/files/2018-09/news-placeholder.png" // Provide the URL of your placeholder image
                alt="Placeholder Image"
              />
            )}
            <div className="flex flex-row justify-between">
              <figcaption className="mt-3 text-sm text-start text-gray-500 dark:text-neutral-500">
                source: {article?.url.slice(0, 30) + "..."}
              </figcaption>
              <p className="mt-3 text-sm  text-gray-500 dark:text-neutral-500">
                {article?.date_published &&
                typeof article.date_published === "string" &&
                article.date_published.length > 16
                  ? article.date_published.slice(0, 10) +
                    " ⦿ " +
                    article.date_published.slice(11, 16)
                  : ""}
              </p>
            </div>
          </figure>

          <div className="space-y-5 md:space-y-8 mt-3">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-200">
                {article?.title}
              </h2>
              <p className="text-lg text-gray-800 dark:text-neutral-400">
                {article?.content}
              </p>
            </div>
          </div>
          {/* End Content */}
        </div>
      </div>
      {/* End Blog Article */}
      {/* Sticky Share Group */}
      <div className="sticky bottom-6 inset-x-0 text-center">
        <div className="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-neutral-800">
          <div className="flex items-center gap-x-1.5">
            <a href={article?.url} target="blank">
              <p className="font-bold text-xs">
                Read More:{" "}
                <span className="font-normal text-xs">
                  {article?.url.slice(0, 20) + "..."}
                </span>
              </p>{" "}
            </a>
            <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsPost;
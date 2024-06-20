import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <hr/>
      <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto stick">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 text-center">
          <div className="md:text-left">
            <Link
              to={"/"}
              className="flex-none  text-xl font-semibold text-black dark:text-white"
              aria-label="Brand"
            >
              Newsway
            </Link>
            <p className="text-gray-400 text-sm">
              {currentYear} © copyrights.{" "}
                <h1 className="text-blue-500 ">Tulika Mall </h1>
            </p>
          </div>

          {/* Social Brands */}
          <div className="md:text-right space-x-12 ">
            <a
              className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
              href="https://www.instagram.com/tulika.mall/"
            >
              Instagarm
            </a>
            <a
              className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
              href="https://github.com/tulika-mall"
            >
             Github
            </a>
            <a
              className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
              href="https://www.linkedin.com/in/tulika-mall-54b453218/"
            >
              Linkedin
            </a>
          </div>
          {/* End Social Brands */}
        </div>
        {/* End Grid */}
      </div>
    </footer>
  );
};

export default Footer;
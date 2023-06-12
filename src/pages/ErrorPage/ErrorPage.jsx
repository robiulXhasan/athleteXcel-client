import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center space-y-3">
      <img
        src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
        alt="404 error image"
        className=" md:w-1/3  mx-auto"
      />
      <h1 className="text-xl md:text-4xl font-semibold">Oops! Page not found.</h1>
      <p className="">
        The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>

      <Link className="btn btn-black  font-semibold " to="/">
        Back to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;

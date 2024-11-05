import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Upcoming = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Upcoming Products</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-purple-500 flex flex-col justify-center items-center text-white gap-4 text-center pt-10 pb-10">
        <h1 className="text-xl font-bold w-1/2">Dashboard</h1>
        <p className="w-1/2">
          Below is a list of products which will soon be available on our website
        </p>
        
      </div>
    </div>
  );
};

export default Upcoming;

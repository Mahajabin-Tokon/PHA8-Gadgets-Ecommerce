import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Upcoming = () => {
  const product = useLoaderData();
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
          Below is a list of products which will soon be available on our
          website
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 mb-10">
        {product.map((product) => (
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={product.product_image}
                alt="Product image"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.product_title}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;

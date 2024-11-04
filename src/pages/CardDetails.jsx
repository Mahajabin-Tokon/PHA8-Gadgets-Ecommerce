import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { addToCart, addToWishlist } from "../utils";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const targetProduct = data.find((eachdata) => eachdata.product_id === id);
    setProduct(targetProduct);
  }, [data, id]);

  const handleClickForCart = (product) => {
    addToCart(product)
  }

  const handleClickForWishlist = (product) => {
    addToWishlist(product)
  }

  return (
    <div>
      <div className="bg-purple-500 flex flex-col justify-center items-center text-white gap-4 text-center pt-10 pb-48">
        <h1 className="text-xl font-bold w-1/2">Product Details</h1>
        <p className="w-1/2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-3/4 mx-auto relative -top-40">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="p-2 ">
            <img
              className="rounded-xl"
              src={product.product_image}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.product_title}</h2>
            <h3>Price: ${product.price}</h3>
            {product.availability ? (
              <div className="bg-green-300 rounded-3xl border-2 border-green-600 text-green-600 md:w-1/3 py-1 px-3">
                In Stock
              </div>
            ) : (
              <div className="bg-red-300 rounded-3xl border-2 border-red-600 text-green-600 md:w-1/3 py-1 px-3">
                Not in Stock
              </div>
            )}
            <p className="font-light">{product.description}</p>
            <p className="font-bold">Specifications:</p>

            {/* {product.specs?.map((item) => {
              <p>{item}</p>;
            })} */}

            {/* <ol>
                <li>1. {product.specs[0]}</li>
                <li>2. {product.specs[1]}</li>
                <li>3. {product.specs[2]}</li>
                <li>4. {product.specs[3]}</li>
            </ol> */}
            <p className="font-bold">Rating:</p>
            <div className="flex gap-2 items-center">
              <ReactStars count={5} value={4} size={24} activeColor="#ffd700" />
              <span className="bg-gray-200 py-1 px-2 rounded-xl">{product.rating}</span>
            </div>
            <div className="card-actions justify-start items-center">
              <button onClick={()=>handleClickForCart(product)} className="btn bg-purple-600 text-white rounded-3xl">
                Add to Cart <AiOutlineShoppingCart />
              </button>
              <div onClick={()=>handleClickForWishlist(product)} className="bg-white rounded-full p-2 text-center border-2">
                <CiHeart className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

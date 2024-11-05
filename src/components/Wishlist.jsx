import { useEffect, useState } from "react";
import { getWishListItems } from "../utils";
import { GiCancel } from "react-icons/gi";

const Wishlist = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedList = getWishListItems();
    setList(storedList);
  }, []);


  return (
    <div>
      <div className="">
        <div className="w-10/12 mx-auto md:flex justify-start items-center p-6">
          <div>
            <h2 className="font-bold text-xl">WishList</h2>
          </div>
          
        </div>
        <div className="">
          {list.map((item) => (
            <div className="w-10/12 mx-auto px-6 py-10">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="py-2 px-6">
                  <img
                    className="rounded-xl w-48 h-40 object-cover"
                    src={item.product_image}
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.product_title}</h2>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </div>
                <div className="m-4">
                  <GiCancel className="text-2xl text-red-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

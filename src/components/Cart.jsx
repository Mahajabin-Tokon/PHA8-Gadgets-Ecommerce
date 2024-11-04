import { useEffect, useState } from "react";
import { GiCancel, GiSettingsKnobs } from "react-icons/gi";
import { getCartItems } from "../utils";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getCartItems();
    setCart(storedCart);
  }, []);

  const handleSort = () => {
    const sorted = [...cart].sort((a,b)=>b.price -a.price)
    setCart(sorted)
  }

  return (
    <div>
      <div className="">
        <div className="w-10/12 mx-auto md:flex justify-between items-center p-6">
          <div>
            <h2 className="font-bold text-xl">Cart</h2>
          </div>
          <div className="md:flex justify-center items-center gap-2">
            <h2 className="font-bold">Total Cost: 999.99</h2>
            <button onClick={handleSort} className="btn border-purple-600 text-purple-600 rounded-3xl px-6">
              Sort by Price <GiSettingsKnobs />
            </button>
            <button className="btn text-white bg-purple-600 rounded-3xl ">
              Purchase
            </button>
          </div>
        </div>
        <div className="">
          {cart.map((item) => (
            <div className="w-10/12 mx-auto px-6 py-10">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="py-2 px-6">
                  <img
                    className="rounded-xl w-48"
                    src={item.product_image}
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.product_title}</h2>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </div>
                <div className="">
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

export default Cart;

{
  /* <div className="w-10/12 mx-auto px-6 py-10">
  <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure className="p-2 ">
      <img className="rounded-xl" src="" alt="Album" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Title</h2>
      <p>Description</p>
      <p>Price</p>
    </div>
    <div className="">
      <GiCancel className="text-2xl text-red-500" />
    </div>
  </div>
</div>; */
}

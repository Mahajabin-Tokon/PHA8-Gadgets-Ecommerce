import { useEffect, useState } from "react";
import { GiCancel, GiSettingsKnobs } from "react-icons/gi";
import { getCartItems } from "../utils";

import check from "../assets/Group.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isCartZero, setIsCartZero] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = getCartItems();
    const price = storedCart
      .reduce((sum, next) => sum + next.price, 0)
      .toFixed(2);
    setTotal(price);
    setCart(storedCart);
    if (storedCart.length === 0) {
      setIsCartZero(true);
    }
  }, []);

  const handleSort = () => {
    const sorted = [...cart].sort((a, b) => b.price - a.price);
    setCart(sorted);
  };

  const handleClose = () => {
    event.preventDefault();
    navigate("/");
  };

  const handlePurchase = () => {
    localStorage.setItem("cart", "");
    handleClose();
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col justify-center items-center space-y-4">
          <img src={check} alt="Green checkmark" />
          <h3 className="font-bold text-lg">Payment Successful</h3>
          <hr className="w-5/6" />
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <p>Thanks for purchasing</p>
          <p>Total: ${total}</p>
          <div className="w-11/12">
            <form onSubmit={handleClose}>
              <button
                onClick={handlePurchase}
                className="btn w-full rounded-3xl"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="">
        <div className="w-10/12 mx-auto md:flex justify-between items-center p-6">
          <div>
            <h2 className="font-bold text-xl">Cart</h2>
          </div>
          <div className="md:flex justify-center items-center gap-2">
            <h2 className="font-bold">Total Cost: {total}</h2>
            <button
              onClick={handleSort}
              className="btn border-purple-600 text-purple-600 rounded-3xl px-6"
            >
              Sort by Price <GiSettingsKnobs />
            </button>
            <button
              disabled={isCartZero}
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="btn text-white bg-purple-600 rounded-3xl "
            >
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

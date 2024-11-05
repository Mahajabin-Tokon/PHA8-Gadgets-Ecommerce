import toast from "react-hot-toast";

const getCartItems = () => {
  const allItems = localStorage.getItem("cart");
  if (allItems) {
    const items = JSON.parse(allItems);
    return items;
  } else {
    return [];
  }
};

const getWishListItems = () => {
  const allItems = localStorage.getItem("wishlist");
  if (allItems) {
    const items = JSON.parse(allItems);
    return items;
  } else {
    return [];
  }
};

const addToCart = (product) => {
  const cart = getCartItems();
  const isExist = cart.find((item) => item.product_id == product.product_id);
  if (isExist) return toast.error('Item already in cart');
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  return toast.success('Item added to cart');
};

const addToWishlist = (product) => {
  const wishlist = getWishListItems();
  const isExist = wishlist.find((item) => item.product_id == product.product_id);
  if (isExist) return toast.error('Item already in wishlist');
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  return toast.success('Item to wishlist cart');
};
export { addToCart, getCartItems, addToWishlist, getWishListItems };

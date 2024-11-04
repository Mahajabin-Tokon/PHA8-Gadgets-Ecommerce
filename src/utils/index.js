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
  if (isExist) return alert("Item already in cart");
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
};

const addToWishlist = (product) => {
  const wishlist = getWishListItems();
  const isExist = wishlist.find((item) => item.product_id == product.product_id);
  if (isExist) return alert("Item already in wishlist");
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};
export { addToCart, getCartItems, addToWishlist, getWishListItems };

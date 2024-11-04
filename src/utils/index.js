const getCartItems = () => {
  const allItems = localStorage.getItem("cart");
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
export { addToCart };

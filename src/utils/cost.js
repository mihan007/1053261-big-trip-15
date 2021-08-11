export const totalPrice = (points) => points.reduce((prev, item) => {
  const offerPrice = item.offers.reduce((prev, item) => prev + item.price, 0);
  return prev + item.price + offerPrice;
}, 0);

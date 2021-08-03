export const createCostTemplate = (points) => {
  const totalPrice = points.reduce((prev, item) => {
    const offerPrice = item.offers.reduce((prev, item) => prev + item.price, 0);
    return prev + item.price + offerPrice;
  }, 0);
  return `<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
      </p>
  `;
};

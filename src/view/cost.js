import AbstractView from './abstract.js';

const createCostTemplate = (points) => {
  const totalPrice = points.reduce((prev, item) => {
    const offerPrice = item.offers.reduce((prev, item) => prev + item.price, 0);
    return prev + item.price + offerPrice;
  }, 0);
  return `<section class="trip-main__trip-info  trip-info js-trip">
    <p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
      </p>
  </section>
  `;
};

export default class Cost extends AbstractView {
  constructor (points) {
    super();
    this.points = points;
  }

  getTemplate () {
    return createCostTemplate(this.points);
  }
}

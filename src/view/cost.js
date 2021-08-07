import { createElement } from '../utils';

const createCostTemplate = (points) => {
  const totalPrice = points.reduce((prev, item) => {
    const offerPrice = item.offers.reduce((prev, item) => prev + item.price, 0);
    return prev + item.price + offerPrice;
  }, 0);
  return `<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
      </p>
  `;
};

export default class Cost {
  constructor (points) {
    this.points = points;
  }

  getTemplate () {
    return createCostTemplate(this.points);
  }

  getElement () {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}

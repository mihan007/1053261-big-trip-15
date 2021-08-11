import AbstractView from './abstract.js';
import { getFormattedTotalPrice } from '../utils/cost';

const createCostTemplate = (points) => {
  return `<section class="trip-main__trip-info  trip-info js-trip">
    <p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${getFormattedTotalPrice(points)}</span>
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

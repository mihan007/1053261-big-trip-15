import AbstractView from './abstract.js';
import { buildPathString } from '../utils/info';

const createInfoTemplate = (points) => {
  const {path, formattedDate} = buildPathString(points);

  return path ? `<div class="trip-info__main">
              <h1 class="trip-info__title">${path.join(' &mdash; ')}</h1>
              <p class="trip-info__dates">${formattedDate}</p>
        </div>` : '';
};

export default class Info extends AbstractView {
  constructor (points) {
    super();
    this.points = points;
  }

  getTemplate () {
    return createInfoTemplate(this.points);
  }
}

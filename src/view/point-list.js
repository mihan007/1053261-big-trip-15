import AbstractView from './abstract.js';

const createPointListTemplate = () => {
  return '<ul class="trip-events__list js-content"></ul>';
};

export default class PointList extends AbstractView {
  getTemplate () {
    return createPointListTemplate();
  }
}

import { createElement } from '../utils';

const createPointListTemplate = () => {
  return '<ul class="trip-events__list js-content"></ul>';
};

export default class PointList {
  getTemplate () {
    return createPointListTemplate();
  }

  getElement (selector = null) {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    if (selector) {
      return this._element.querySelector(selector);
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}

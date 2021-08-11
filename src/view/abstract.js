import {createElement} from '../utils.js';

export default class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error('Can\'t instantiate Abstract, only concrete one.');
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error('Abstract method not implemented: getTemplate');
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

  removeElement() {
    this._element = null;
  }
}
import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';
import Offers from './offers';
import AbstractView from './abstract.js';
import { formatDateForUi, formatDateTimeForHtmlAttribute, formatDateTimeForUi, formatDuration } from '../utils/point';

dayjs.extend(durationPlugin);

const createPointListTemplate = (point) => {
  const { typeName, typeIconUrl, offers, destination, startDate, endDate, isFavorite, price } = point;
  const offersListTemplate = new Offers(offers);
  const favoriteClassName = isFavorite ? 'event__favorite-btn--active' : '';

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${formatDateTimeForHtmlAttribute(startDate)}">${formatDateForUi(startDate)}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="${typeIconUrl}" alt="${typeName} icon">
                </div>
                <h3 class="event__title">${typeName} ${destination.title}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${formatDateTimeForHtmlAttribute(startDate)}">
                        ${formatDateTimeForUi(startDate)}
                    </time>
                    —
                    <time class="event__end-time" datetime="${formatDateTimeForHtmlAttribute(endDate)}">
                        ${formatDateTimeForUi(endDate)}
                      </time>
                  </p>
                  <p class="event__duration">${formatDuration(startDate, endDate)}</p>
                </div>
                <p class="event__price">
                  €&nbsp;<span class="event__price-value">${price}</span>
                </p>
                ${offersListTemplate.getTemplate()}
                <button class="event__favorite-btn ${favoriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
                  </svg>
                </button>
                <button class="event__rollup-btn js-open-edit-form" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>
  `;
};

export default class Point extends AbstractView {
  constructor (point) {
    super();
    this.point = point;
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate () {
    return createPointListTemplate(this.point);
  }

  _clickHandler (evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler (callback) {
    this._callback.click = callback;
    this.getElement('.js-open-edit-form').addEventListener('click', this._clickHandler);
  }
}

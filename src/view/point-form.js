import dayjs from 'dayjs';
import { PointType } from '../constants/point-type';
import { DateTimeFormat } from '../constants/date-time-format';
import { getPointTypeIconUrl } from '../constants/point-type-icons';
import { PointTypeNames } from '../constants/point-type-names';
import { Destinations } from '../constants/destinations';
import { PointTypeOffers } from '../constants/point-type-offers';
import AbstractView from './abstract.js';
import { getRandomInteger } from '../utils';

const createPointTypeEditTemplate = (currentType) => {
  return Object.entries(PointType).map((pointType) => {
    const pointTypeName = PointTypeNames[pointType[1]];
    const ind = Date.now() + getRandomInteger(1, 10000);
    return `
    <div class="event__type-item">
        <input id="event-type-${pointTypeName.toLowerCase()}-${ind}" class="event__type-input  visually-hidden" type="radio" name="event-type-${ind}" value="${pointTypeName}" ${currentType === pointType ? 'checked' : ''}>
        <label class="event__type-label  event__type-label--${pointTypeName.toLowerCase()}" for="event-type-${pointTypeName.toLowerCase()}-${ind}">${pointTypeName}</label>
    </div>
  `;
  }).join('');
};

const createDestinationListTemplate = (currentDestination) => {
  return Destinations.map((destinationName) => {
    `<option value="${destinationName}" ${currentDestination && currentDestination.title === destinationName ? 'selected' : ''}></option>`;
  }).join('');
};

const createEventAvailableOffers = (type, currentOffers) => {

  return PointTypeOffers[type].map((offer, ind) => {
    const checked = Boolean(currentOffers.find((el) => el.title === offer.title));

    return `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden"
            id="event-offer-${ind}"
            type="checkbox"
            name="event-offer-meal"
            ${checked ? 'checked' : ''}
            >
        <label class="event__offer-label" for="event-offer-${ind}">
          <span class="event__offer-title">${offer.title}</span>
          +€&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>`;
  }).join('');
};

const createEventDestinationPicturesTemplate = (pictures) => {
  const picturesTemplate = pictures.map((pictureUrl) =>
    `<img class="event__photo" src="${pictureUrl}" alt="Event photo">`,
  ).join('');
  return pictures ? `
  <div class="event__photos-container">
    <div class="event__photos-tape">
      ${picturesTemplate}
    </div>
  </div>
  ` : '';
};

const createEventDestinationInfoTemplate = (destination) => {
  const eventDestinationPicturesTemplate = destination ? createEventDestinationPicturesTemplate(destination.pictures) : '';
  return destination ?
    `<p class="event__destination-description">${destination.description}${eventDestinationPicturesTemplate}</p>`
    : '';
};

const createPointFormTemplate = (point = {}) => {
  const {
    type = PointType.TAXI,
    typeName,
    typeIconUrl = null,
    offers = [],
    destination = null,
    startDate,
    endDate,
    price,
  } = point;

  const ind = Date.now() + getRandomInteger(1, 10000);

  const startDateTemplate = startDate ? dayjs(startDate).format(DateTimeFormat.formDateTimeAttribute) : '';
  const endDateTemplate = endDate ? dayjs(endDate).format(DateTimeFormat.formDateTimeAttribute) : '';

  const pointTypeIconUrl = typeIconUrl ?? getPointTypeIconUrl(type);
  const pointTypeNameTemplate = typeName ?? PointTypeNames[type];
  const pointTypeTemplate = createPointTypeEditTemplate(type);
  const destinationsListTemplate = createDestinationListTemplate(destination);

  const eventOfferSelectorTemplate = createEventAvailableOffers(type, offers);
  const eventAvailableOffersTemplate = eventOfferSelectorTemplate ? `
    <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">${eventOfferSelectorTemplate}</div>
    </section>` : '';

  const eventDestinationInfoTemplate = createEventDestinationInfoTemplate(destination);
  const eventDestinationTemplate = destination ? `
    <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${eventDestinationInfoTemplate}</p>
    </section>` : '';

  return `<li class="trip-events__item">
            <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-${ind}">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="${pointTypeIconUrl}" alt="${pointTypeNameTemplate} icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${ind}" type="checkbox">
                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${pointTypeTemplate}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-${ind}">
                      ${pointTypeNameTemplate}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-${ind}" type="text" name="event-destination" value="${destination ? destination.title : ''}" list="destination-list-${ind}">
                    <datalist id="destination-list-${ind}">
                      ${destinationsListTemplate}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-${ind}">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-${ind}" type="text" name="event-start-time" value="${startDateTemplate}">
                    —
                    <label class="visually-hidden" for="event-end-time-${ind}">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-${ind}" type="text" name="event-end-time" value="${endDateTemplate}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-${ind}">
                      <span class="visually-hidden">Price</span>
                      €
                    </label>
                    <input class="event__input  event__input--price" id="event-price-${ind}" type="text" name="event-price" value="${price ? price : ''}">
                  </div>

                  <button class="event__save-btn btn btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">${destination ? 'Delete' : 'Cancel'}</button>
                  <button class="event__rollup-btn js-close-edit-form" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  ${eventAvailableOffersTemplate}
                  ${eventDestinationTemplate}
                </section>
              </form>
          </li>
  `;
};

export default class PointForm extends AbstractView {
  constructor (point = {}) {
    super();
    this.point = point;
    this._submitHandler = this._submitHandler.bind(this);
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate () {
    return createPointFormTemplate(this.point);
  }

  _submitHandler (evt) {
    evt.preventDefault();
    this._submitHandler.submit();
  }

  _clickHandler (evt) {
    evt.preventDefault();
    this._clickHandler.click();
  }

  setSubmitHandler (callback) {
    this._submitHandler.submit = callback;
    this.getElement('form').addEventListener('submit', this._submitHandler);
  }

  setClickHandler (callback) {
    this._clickHandler.click = callback;
    this.getElement('.js-close-edit-form').addEventListener('click', this._clickHandler);
  }
}

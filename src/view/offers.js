export const createOffersTemplate = (offers) => {
  const offersTemplate = offers.map((offer) =>
    `<li class="event__offer">
    <nobr>
        <span class="event__offer-title">${offer.title}</nobr></span>
        +€&nbsp;<span class="event__offer-price">${offer.price}</span>
    </nobr>
    </li>`,
  ).join('');

  return offers ?
    `<h4 class="visually-hidden">Offers:</h4><ul class="event__selected-offers">${offersTemplate}</ul>`
    : '';
};

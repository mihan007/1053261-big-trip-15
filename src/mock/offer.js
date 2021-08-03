import { getRandomArrayElement } from '../utils.js';
import { PointTypeOffers } from '../constants/point-type-offers';

export const generateOffer = (pointType) => {
  const pointOffer = getRandomArrayElement(PointTypeOffers[pointType]);

  return {
    pointType,
    title: pointOffer.title,
    price: pointOffer.price,
  };
};

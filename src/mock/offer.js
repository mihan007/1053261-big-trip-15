import { PointTypeOffers } from '../constants/point-type-offers';
import { getRandomArrayElement } from '../utils/common';

export const generateOffer = (pointType) => {
  const pointOffer = getRandomArrayElement(PointTypeOffers[pointType]);

  return {
    pointType,
    title: pointOffer.title,
    price: pointOffer.price,
  };
};

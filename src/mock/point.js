import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';
import { PointType } from '../constants/point-type';
import { getRandomInteger, range } from '../utils.js';
import { PointPriceRange } from '../constants/price-ranges';
import { generateOffer } from './offer';
import { getPointTypeIconUrl } from '../constants/point-type-icons';
import { generateDestination } from './destination';
import { PointTypeNames } from '../constants/point-type-names';
import { PointTypeOffers } from '../constants/point-type-offers';
import { pointTypeDurations } from '../constants/point-type-durations';

dayjs.extend(dayjsRandom);

const generatePointType = () => {
  const pointTypes = Object.values(PointType);
  const randomIndex = getRandomInteger(0, pointTypes.length - 1);

  return pointTypes[randomIndex];
};

const generateOffers = (pointType) => {
  if (!PointTypeOffers[pointType]) {
    return [];
  }

  const offers = new Set();
  const totalOffersCount = Math.min(PointTypeOffers[pointType].length, 5);
  const offersCount = getRandomInteger(0, totalOffersCount);

  range(0, offersCount).map(() => offers.add(generateOffer(pointType)));

  return Array.from(offers);
};

const generateDateRange = (startDate, type) => {
  const duration = getRandomInteger(...pointTypeDurations[type]);

  return dayjs(startDate).add(duration, 'minute').toDate();
};

const generatePrice = () => getRandomInteger(PointPriceRange.min, PointPriceRange.max);

const generateIsFavorite = () => Boolean(getRandomInteger(0, 1));

const generateRandomDate = () => {
  const daysBefore = getRandomInteger(-20, 0);
  const daysAfter = getRandomInteger(-20, 0);

  return dayjs.between(dayjs.recent(daysBefore), dayjs.soon(daysAfter)).toDate();
};

export const generatePoint = () => {
  const pointType = generatePointType();
  const startDate = generateRandomDate();
  const endDate = generateDateRange(startDate, pointType);

  return {
    type: pointType,
    typeName: PointTypeNames[pointType],
    typeIconUrl: getPointTypeIconUrl(pointType),
    offers: generateOffers(pointType),
    destination: generateDestination(),
    startDate,
    endDate,
    isFavorite: generateIsFavorite(),
    price: generatePrice(),
  };
};

import { PointType } from './point-type';

export const PointTypeOffers = {
  [PointType.BUS]: [
    { 'title': 'Motor coach', 'price': 150 },
    { 'title': 'School bus', 'price': 250 },
    { 'title': 'Shuttle bus', 'price': 350 },
    { 'title': 'Minibus', 'price': 400 },
    { 'title': 'Minicoach', 'price': 50 },
    { 'title': 'Double-decker bus', 'price': 500 },
    { 'title': 'Single-decker bus', 'price': 600 },
    { 'title': 'Low-floor bus', 'price': 1000 },
  ],
  [PointType.TAXI]: [
    { 'title': 'Economy', 'price': 30 },
    { 'title': 'Comfort', 'price': 50 },
    { 'title': 'Comfort Plus', 'price': 100 },
    { 'title': 'Pool', 'price': 10 },
    { 'title': 'Business', 'price': 200 },
    { 'title': 'Ultima', 'price': 300 },
    { 'title': 'Elite', 'price': 500 },
  ],
  [PointType.TRAIN]: [
    { 'title': 'High speed', 'price': 300 },
    { 'title': 'Inter-city', 'price': 500 },
    { 'title': 'Commuter', 'price': 200 },
    { 'title': 'Regional', 'price': 400 },
    { 'title': 'Rapid', 'price': 900 },
    { 'title': 'Light', 'price': 350 },
  ],
  [PointType.SHIP]: [
    { 'title': 'Sailboat', 'price': 600 },
    { 'title': 'Motorboat', 'price': 800 },
    { 'title': 'Catamaran', 'price': 950 },
    { 'title': 'Riverboat', 'price': 300 },
  ],
  [PointType.TRANSPORT]: [],
  [PointType.DRIVE]: [],
  [PointType.FLIGHT]: [
    { 'title': 'Upgrade to business class', 'price': 2000 },
    { 'title': 'Upgrade to first class', 'price': 1000 },
  ],
  [PointType.CHECK_IN]: [],
  [PointType.SIGHTSEEING]: [
    { 'title': 'With dinner', 'price': 50 },
  ],
  [PointType.RESTAURANT]: [
    { 'title': 'Casual dining', 'price': 20 },
    { 'title': 'Contemporary casual', 'price': 30 },
    { 'title': 'Family style', 'price': 40 },
    { 'title': 'Fast food', 'price': 5 },
    { 'title': 'Cafe', 'price': 10 },
    { 'title': 'Buffet', 'price': 15 },
  ],
};

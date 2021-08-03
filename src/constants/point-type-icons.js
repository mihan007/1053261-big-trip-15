import { PointType } from './point-type';

const PointTypeIcons = {
  [PointType.BUS]: 'bus.png',
  [PointType.TAXI]: 'taxi.png',
  [PointType.TRAIN]: 'train.png',
  [PointType.SHIP]: 'ship.png',
  [PointType.TRANSPORT]: 'transport.png',
  [PointType.DRIVE]: 'drive.png',
  [PointType.FLIGHT]: 'flight.png',
  [PointType.CHECK_IN]: 'check-in.png',
  [PointType.SIGHTSEEING]: 'sightseeing.png',
  [PointType.RESTAURANT]: 'restaurant.png',
};

export const getPointTypeIconUrl = (pointType) => {
  if (PointTypeIcons[pointType]) {
    return 'img/icons/' + PointTypeIcons[pointType];
  }
  return 'img/icons/sightseeing.png';
};

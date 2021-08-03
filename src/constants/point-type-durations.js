import { PointType } from './point-type';

export const pointTypeDurations = {
  [PointType.BUS]: [10, 180],
  [PointType.TAXI]: [20, 180],
  [PointType.TRAIN]: [2000, 3000],
  [PointType.SHIP]: [60, 480],
  [PointType.TRANSPORT]: [10, 80],
  [PointType.DRIVE]: [60, 480],
  [PointType.FLIGHT]: [90, 720],
  [PointType.CHECK_IN]: [5, 10],
  [PointType.SIGHTSEEING]: [5, 240],
  [PointType.RESTAURANT]: [60, 180],
};

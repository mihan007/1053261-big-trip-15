import dayjs from 'dayjs';
import { DateTimeFormat } from '../constants/date-time-format';

export const buildPathString = (points) => {
  const path = [];
  let lastAddedTitle = '';
  points.map((point) => {
    const pointTitle = point.destination.title;
    if (pointTitle !== lastAddedTitle) {
      path.push(pointTitle);
      lastAddedTitle = pointTitle;
    }
  });

  points.sort((a, b) => {
    const dayDiff = b.startDate - a.startDate;
    return dayDiff === 0 ? b.endDate - a.endDate : dayDiff;
  });

  const startDate = points.length ? dayjs(points[0].startDate) : '';
  const formattedStartDate = startDate ? startDate.format(DateTimeFormat.infoFullDate) : '';

  const endDate = points.length ? dayjs(points[points.length - 1].endDate) : '';
  const endDateTemplate = endDate ? endDate.format(DateTimeFormat.infoFullDate) : '';

  let formattedDate = `${formattedStartDate}&nbsp;&mdash;&nbsp;${endDateTemplate}`;
  if (!points) {
    formattedDate = '';
  } else if (startDate.isSame(endDate, 'day')) {
    formattedDate = `${formattedStartDate}`;
  } else {
    const formattedEndDate = endDate.format(DateTimeFormat.infoShortDate);
    formattedDate = `${formattedStartDate}&nbsp;&mdash;&nbsp;${formattedEndDate}`;
  }

  return { path, formattedDate };
};

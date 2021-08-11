import dayjs from 'dayjs';
import { DateTimeFormat } from '../constants/date-time-format';

export const formatDateTimeForHtmlAttribute = (date) => dayjs(date).format(DateTimeFormat.htmlDateTimeAttribute);

export const formatDateTimeForUi = (date) => dayjs(date).format(DateTimeFormat.pointListTime);

export const formatDateForUi = (date) => dayjs(date).format(DateTimeFormat.pointListDate);

export const formatDuration = (startDate, endDate) => {
  const duration = dayjs.duration(dayjs(endDate).diff(dayjs(startDate)));
  let durationFormatted = duration.format(DateTimeFormat.durationShort);
  if (duration.days() > 0) {
    durationFormatted = duration.format(DateTimeFormat.durationLong);
  } else if (duration.hours() > 0) {
    durationFormatted = duration.format(DateTimeFormat.durationMedium);
  }

  return durationFormatted;
};

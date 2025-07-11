import { convertADToBS } from './dateConversion';
import { CalendarType } from '../types/types';

export interface GetInitialDateParams {
  formValues?: Record<string, string>;
  calendarType: CalendarType;
  name: string;
  maxAge?: string;
  currentADDate: { year: number; month: number; day: number };
  currentBSDate: { year: number; month: number; day: number };
}

export const getInitialCalendarDate = ({
  formValues,
  calendarType,
  name,
  maxAge,
  currentADDate,
  currentBSDate,
}: GetInitialDateParams): { year: number; month: number; day: number } => {
  if (formValues) {
    if (calendarType === 'AD' && formValues?.date2) {
      const [year, month, day] = formValues.date2.split('-').map(Number);
      return { year, month, day };
    }
    if (calendarType === 'BS' && formValues?.[name]) {
      const [year, month, day] = formValues[name].split('-').map(Number);
      return { year, month, day };
    }
  }

  const fallback = parseDateConstraint(maxAge, calendarType === 'AD');
  if (fallback) return fallback;

  return calendarType === 'AD' ? currentADDate : currentBSDate;
};

export const getCurrentADDate = () => {
    const today = new Date();
    return {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
    };
};

export const getCurrentBSDate = () => {
    const today = new Date();
    const gregorianDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const bsDate = convertADToBS(gregorianDate);
    if (!bsDate) return { year: 0, month: 0, day: 0 };
    return { year: bsDate.year, month: bsDate.month, day: bsDate.day };
};

export function parseDateConstraint(constraint?: string, isAD: boolean = false) {
    if (!constraint) return null;
    if (constraint === 'futureDate') return isAD ? getCurrentADDate() : getCurrentBSDate();
    if (/^\d+$/.test(constraint)) {
        const yearsAgo = parseInt(constraint);
        const date = isAD ? getCurrentADDate() : getCurrentBSDate();
        return { year: date.year - yearsAgo, month: date.month, day: date.day };
    }
    if (constraint.match(/^\d{4}-\d{2}-\d{2}$/)) {
        const [year, month, day] = constraint.split('-').map(Number);
        return { year, month, day };
    }
    return null;
}

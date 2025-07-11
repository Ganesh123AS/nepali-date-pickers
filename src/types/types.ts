export type CalendarType = 'AD' | 'BS';
export interface NepaliCalendarProps {
  label?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  name?: string;
  maxAge?: string;
  maxDate?: string;
  variant?: 'light' | 'dark';
  selectTodayDate?: boolean;
  dynamicDate?: CalendarType[];
  dynamicDateRange?: Boolean;
  size?: number;
  formValues?: Record<string, string>;
  onChange?: (event: { target: { name: string; value: { ad: string; bs: string } } }) => void;
}

export interface DateObj {
  year: number;
  month: number;
  day: number;
}

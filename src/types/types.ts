export type CalendarType = 'AD' | 'BS';
export type variantType = 'light' | 'standard' | 'basic';
export interface NepaliCalendarProps {
  label?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  // slotProps?: React.CSSProperties;
  name?: string;
  maxAge?: string;
  maxDate?: string;
  variant?: variantType;
  selectTodayDate?: boolean;
  dynamicDate?: CalendarType[];
  isRequired?: Boolean;
  size?: number;
  icon: any,
  formValues?: Record<string, string>;
  onChange?: (event: { target: { name: string; value: { ad: string; bs: string } } }) => void;
}

export interface DateObj {
  year: number;
  month: number;
  day: number;
}

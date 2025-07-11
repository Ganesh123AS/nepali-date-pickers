import { BaseMonthDaysByYear } from "./bsYear";

// Define type for BS date with year, month, day
type BSDATE = { year: number; month: number; day: number };

// Reference point: 1990-01-01 BS = 1943-04-13 AD
const bsStartYear = 1990;
const adStartDate = new Date("1933-04-13");

// Precompute cumulative days to start of each year from 2000-01-01 BS
const yearCumulativeDays: Map<number, number> = new Map();
let totalDays = 0;
for (let year = bsStartYear; year <= 2099; year++) {
  // Store cumulative days up to start of year
  yearCumulativeDays.set(year, totalDays);
  // Sum days in all months of the year
  if (BaseMonthDaysByYear[year]) {
    totalDays += Object.values(BaseMonthDaysByYear[year]).reduce((sum, days) => sum + days, 0);
  } else {
    break; // Stop if year data is unavailable
  }
}

// Format number as two-digit string (e.g., 1 -> "01")
function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

// Format Date object as YYYY-MM-DD string
function formatDate(d: Date): string {
  return d.toISOString().split("T")[0];
}

// Convert AD date string (YYYY-MM-DD) to BS date
export function convertADToBS(adDateStr: string): BSDATE | undefined {
  const adDate = new Date(adDateStr);
  if (isNaN(adDate.getTime())) return undefined;

  const daysDifference = Math.floor((adDate.getTime() - adStartDate.getTime()) / 86400000);
  if (daysDifference < 0) return undefined;

  // Find BS year using binary search
  let left = bsStartYear;
  let right = 2099;
  let bsYear = bsStartYear;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const yearStart = yearCumulativeDays.get(mid) ?? Infinity;
    const nextYearStart = yearCumulativeDays.get(mid + 1) ?? Infinity;

    if (yearStart <= daysDifference && daysDifference < nextYearStart) {
      bsYear = mid;
      break;
    }

    if (yearStart > daysDifference) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  const yearStartDays = yearCumulativeDays.get(bsYear) ?? 0;
  let remainingDays = daysDifference - yearStartDays;

  let bsMonth = 1;
  while (bsMonth <= 12 && remainingDays >= (BaseMonthDaysByYear[bsYear]?.[bsMonth] ?? 0)) {
    remainingDays -= BaseMonthDaysByYear[bsYear][bsMonth];
    bsMonth++;
  }

  if (bsMonth > 12 || remainingDays < 0) return undefined;

  const bsDay = remainingDays + 1;

  return { year: bsYear, month: bsMonth, day: bsDay };
}


// Convert BS date to AD date string (YYYY-MM-DD)
export function convertBSToAD(bsYear: number, bsMonth: number, bsDay: number): string | undefined {
  // Validate inputs
  if (
    bsYear < bsStartYear ||
    bsMonth < 1 ||
    bsMonth > 12 ||
    bsDay < 1 ||
    !BaseMonthDaysByYear[bsYear] ||
    bsDay > BaseMonthDaysByYear[bsYear][bsMonth]
  ) {
    return undefined; // Invalid BS date
  }

  // Calculate total days from 2000-01-01 BS to input BS date
  let totalDays = yearCumulativeDays.get(bsYear) || 0;
  for (let m = 1; m < bsMonth; m++) {
    totalDays += BaseMonthDaysByYear[bsYear][m];
  }
  totalDays += bsDay; // Adjust for 1-based day indexing

  // Calculate AD date by adding days to reference date
  const adDate = new Date(adStartDate);
  adDate.setDate(adStartDate.getDate() + totalDays);

  // Return formatted AD date
  return formatDate(adDate);
}


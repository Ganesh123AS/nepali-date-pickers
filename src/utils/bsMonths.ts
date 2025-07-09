import { validateMultipleYears } from "../validate/test";




// bs[2053] = [2053, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
// bs[2054] = [2054, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
// bs[2055] = [2055, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
// bs[2056] = [2056, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30];
// bs[2057] = [2057, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
// bs[2058] = [2058, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
// bs[2059] = [2059, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
// bs[2060] = [2060, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
// bs[2061] = [2061, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
// bs[2062] = [2062, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31];
// bs[2063] = [2063, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
// bs[2064] = [2064, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
// bs[2065] = [2065, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
// bs[2066] = [2066, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
// bs[2067] = [2067, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
// bs[2068] = [2068, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
// bs[2069] = [2069, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
// bs[2070] = [2070, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
// bs[2071] = [2071, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
// bs[2072] = [2072, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
// bs[2073] = [2073, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
// bs[2074] = [2074, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
// bs[2075] = [2075, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
// bs[2076] = [2076, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
// bs[2077] = [2077, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
// bs[2078] = [2078, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
// bs[2079] = [2079, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
// bs[2080] = [2080, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
// bs[2081] = [2081, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
// bs[2082] = [2082, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
// bs[2083] = [2083, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
// bs[2084] = [2084, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
// bs[2085] = [2085, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30];
// bs[2086] = [2086, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
// bs[2087] = [2087, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30];
// bs[2088] = [2088, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30];
// bs[2089] = [2089, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
// bs[2090] = [2090, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
// bs[2091] = [2091, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30];
// bs[2092] = [2092, 30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30];
// bs[2093] = [2093, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
// bs[2094] = [2094, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
// bs[2095] = [2095, 31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30];
// bs[2096] = [2096, 30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
// bs[2097] = [2097, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
// bs[2098] = [2098, 31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31];
// bs[2099] = [2099, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];






export const baseMonthDays1999: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2000: Record<number, number> = Object.fromEntries([
    ...[9, 11].map(m => [m, 29]),
    ...[1, 6, 7, 8, 10].map(m => [m, 30]),
    ...[3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2001: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
]);

export const baseMonthDays2002: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 5].map(m => [m, 31]),
    ...[3, 4].map(m => [m, 32]),
]);

export const baseMonthDays2003: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2004: Record<number, number> = Object.fromEntries([
    ...[9, 11].map(m => [m, 29]),
    ...[1, 6, 7, 8, 10].map(m => [m, 30]),
    ...[3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2005: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
]);

export const baseMonthDays2006: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 5].map(m => [m, 31]),
    ...[3, 4].map(m => [m, 32]),
]);

export const baseMonthDays2007: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2008: Record<number, number> = Object.fromEntries([
    ...[7, 10, 11].map(m => [m, 29]),
    ...[8, 9, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2009: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
]);

export const baseMonthDays2010: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 5].map(m => [m, 31]),
    ...[3, 4].map(m => [m, 32]),
]);

export const baseMonthDays2011: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2012: Record<number, number> = Object.fromEntries([
    ...[7, 10].map(m => [m, 29]),
    ...[8, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2013: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
]);

export const baseMonthDays2014: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 5].map(m => [m, 31]),
    ...[3, 4].map(m => [m, 32]),
]);

export const baseMonthDays2015: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2016: Record<number, number> = Object.fromEntries([
    ...[7, 10].map(m => [m, 29]),
    ...[8, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2017: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
]);

export const baseMonthDays2018: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2019: Record<number, number> = Object.fromEntries([
    ...[9, 11].map(m => [m, 29]),
    ...[6, 7, 8, 10].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);


export const baseMonthDays2020: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2021: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
]);

export const baseMonthDays2022: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11, 12].map(m => [m, 30]),
    ...[1, 3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2023: Record<number, number> = Object.fromEntries([
    ...[9, 11].map(m => [m, 29]),
    ...[6, 7, 8, 10].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2024: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2025: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
]);

export const baseMonthDays2026: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2027: Record<number, number> = Object.fromEntries([
    ...[9, 11].map(m => [m, 29]),
    ...[1, 6, 7, 8, 10].map(m => [m, 30]),
    ...[3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2028: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
]);

export const baseMonthDays2029: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4].map(m => [m, 31]),
    ...[3, 5].map(m => [m, 32]),
]);

export const baseMonthDays2030: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2031: Record<number, number> = Object.fromEntries([
    ...[9, 11].map(m => [m, 29]),
    ...[1, 6, 7, 8, 10].map(m => [m, 30]),
    ...[3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);


// START FROM HERE
// bs[2032] = [2032, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
export const baseMonthDays2032: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

// bs[2033] = [2033, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
export const baseMonthDays2033: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 5, 6].map(m => [m, 31]),
    ...[3, 4].map(m => [m, 32]),
]);

// bs[2034] = [2034, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
export const baseMonthDays2034: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

// bs[2035] = [2035, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
export const baseMonthDays2035: Record<number, number> = Object.fromEntries([
    ...[8, 10, 11].map(m => [m, 29]),
    ...[1, 7, 8, 9, 12].map(m => [m, 30]),
    ...[3, 5, 6].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

// bs[2036] = [2036, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
export const baseMonthDays2036: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

// bs[2037] = [2037, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
export const baseMonthDays2037: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 5, 6].map(m => [m, 31]),
    ...[3, 4].map(m => [m, 32]),
]);

// bs[2038] = [2038, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
export const baseMonthDays2038: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

// bs[2039] = [2039, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
export const baseMonthDays2039: Record<number, number> = Object.fromEntries([
    ...[7, 10].map(m => [m, 29]),
    ...[8, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

// bs[2040] = [2040, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
export const baseMonthDays2040: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
]);

// bs[2041] = [2041, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
export const baseMonthDays2041: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 5].map(m => [m, 31]),
    ...[3, 4].map(m => [m, 32]),
]);

// bs[2042] = [2042, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
export const baseMonthDays2042: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

// bs[2043] = [2043, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
export const baseMonthDays2043: Record<number, number> = Object.fromEntries([
    ...[7, 10].map(m => [m, 29]),
    ...[8, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

// bs[2044] = [2044, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
export const baseMonthDays2044: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

// bs[2045] = [2045, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
export const baseMonthDays2045: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

// bs[2046] = [2046, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
export const baseMonthDays2046: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

// bs[2047] = [2047, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
export const baseMonthDays2047: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

// bs[2048] = [2048, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
export const baseMonthDays2048: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

// bs[2049] = [2049, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
export const baseMonthDays2049: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11, 12].map(m => [m, 30]),
    ...[1, 3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

// bs[2050] = [2050, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
export const baseMonthDays2050: Record<number, number> = Object.fromEntries([
    ...[9, 11].map(m => [m, 29]),
    ...[6, 7, 8, 10, 12].map(m => [m, 30]),
    ...[1, 3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);
// bs[2051] = [2051, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
export const baseMonthDays2051: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

// bs[2052] = [2052, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
export const baseMonthDays2052: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2053: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11, 12].map(m => [m, 30]),
    ...[1, 3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2054: Record<number, number> = Object.fromEntries([
    ...[9, 11].map(m => [m, 29]),
    ...[6, 7, 8, 10, 12].map(m => [m, 30]),
    ...[1, 3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2055: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2056: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2057: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2058: Record<number, number> = Object.fromEntries([
    ...[9, 11].map(m => [m, 29]),
    ...[1, 6, 7, 8, 10, 12].map(m => [m, 30]),
    ...[3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2059: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2060: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 5].map(m => [m, 31]),
    ...[3, 4].map(m => [m, 32]),
]);

export const baseMonthDays2061: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2062: Record<number, number> = Object.fromEntries([
    ...[7, 9, 11].map(m => [m, 29]),
    ...[1, 6, 8, 10, 12].map(m => [m, 30]),
    ...[3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2063: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2064: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 5].map(m => [m, 31]),
    ...[3, 4].map(m => [m, 32]),
]);

export const baseMonthDays2065: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2066: Record<number, number> = Object.fromEntries([
    ...[7, 10, 11].map(m => [m, 29]),
    ...[8, 9, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2067: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2068: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 5].map(m => [m, 31]),
    ...[3, 4].map(m => [m, 32]),
]);

export const baseMonthDays2069: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2070: Record<number, number> = Object.fromEntries([
    ...[7, 10].map(m => [m, 29]),
    ...[8, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2071: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
]);

export const baseMonthDays2072: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2073: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4,].map(m => [m, 32]),
]);

export const baseMonthDays2074: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2075: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
]);

export const baseMonthDays2076: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11, 12].map(m => [m, 30]),
    ...[1, 3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2077: Record<number, number> = Object.fromEntries([
    ...[9, 11].map(m => [m, 29]),
    ...[6, 7, 8, 10].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2078: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 3, 5, 6].map(m => [m, 31]),
    ...[4].map(m => [m, 32]),
]);

export const baseMonthDays2079: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
]);

export const baseMonthDays2080: Record<number, number> = Object.fromEntries([
    ...[9, 10].map(m => [m, 29]),
    ...[6, 7, 8, 11, 12].map(m => [m, 30]),
    ...[1, 3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2081: Record<number, number> = Object.fromEntries([
    ...[9, 11].map(m => [m, 29]),
    ...[6, 7, 8, 10].map(m => [m, 30]),
    ...[1, 3, 5, 12].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
]);

export const baseMonthDays2082: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
]);

export const baseMonthDays2083: Record<number, number> = Object.fromEntries([
    ...[8, 10].map(m => [m, 29]),
    ...[7, 9, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3,].map(m => [m, 32]),
]);

export const baseMonthDays2084: Record<number, number> = Object.fromEntries([
    ...[9].map(m => [m, 29]),
    ...[6, 7, 8, 10, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5].map(m => [m, 31]),
    ...[3,].map(m => [m, 32]),
]);

export const baseMonthDays2085: Record<number, number> = Object.fromEntries([
    ...[7, 8, 10, 11, 12].map(m => [m, 30]),
    ...[1, 3, 6].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
    ...[9].map(m => [m, 29]),
    ...[5].map(m => [m, 30]),
]);

export const baseMonthDays2086: Record<number, number> = Object.fromEntries([
    ...[6, 7, 8, 10, 11, 12].map(m => [m, 30]),
    ...[1, 3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
    ...[9].map(m => [m, 29]),
]);

export const baseMonthDays2087: Record<number, number> = Object.fromEntries([
    ...[7, 8, 10, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
    ...[9].map(m => [m, 29]),
]);

export const baseMonthDays2088: Record<number, number> = Object.fromEntries([
    ...[1, 5, 7, 8, 10, 11, 12].map(m => [m, 30]),
    ...[2, 6].map(m => [m, 31]),
    ...[3, 4].map(m => [m, 32]),
    ...[9].map(m => [m, 29]),
]);

export const baseMonthDays2089: Record<number, number> = Object.fromEntries([
    ...[1, 6, 7, 8, 10, 11, 12].map(m => [m, 30]),
    ...[3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
    ...[9].map(m => [m, 29]),
]);

export const baseMonthDays2090: Record<number, number> = Object.fromEntries([
    ...[1, 6, 7, 8, 10, 11, 12].map(m => [m, 30]),
    ...[3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
    ...[9].map(m => [m, 29]),
]);

export const baseMonthDays2091: Record<number, number> = Object.fromEntries([
    ...[7, 8, 10, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
    ...[9].map(m => [m, 29]),
]);

export const baseMonthDays2092: Record<number, number> = Object.fromEntries([
    ...[1, 6, 7, 8, 10, 11, 12].map(m => [m, 30]),
    ...[2, 5].map(m => [m, 31]),
    ...[3, 4].map(m => [m, 32]),
    ...[9].map(m => [m, 29]),
]);

export const baseMonthDays2093: Record<number, number> = Object.fromEntries([
    ...[1, 6, 7, 8, 10, 11, 12].map(m => [m, 30]),
    ...[3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
    ...[9].map(m => [m, 29]),
]);

export const baseMonthDays2094: Record<number, number> = Object.fromEntries([
    ...[6, 7, 8, 10, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
    ...[9].map(m => [m, 29]),
]);

export const baseMonthDays2095: Record<number, number> = Object.fromEntries([
    ...[7, 9, 10, 11, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
    ...[8].map(m => [m, 29]),
]);

export const baseMonthDays2096: Record<number, number> = Object.fromEntries([
    ...[1, 6, 7, 9, 11, 12].map(m => [m, 30]),
    ...[2, 5].map(m => [m, 31]),
    ...[3, 4].map(m => [m, 32]),
    ...[8, 10].map(m => [m, 29]),
]);

export const baseMonthDays2097: Record<number, number> = Object.fromEntries([
    ...[6, 7, 8, 10, 11, 12].map(m => [m, 30]),
    ...[1, 3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
    ...[9].map(m => [m, 29]),
]);

export const baseMonthDays2098: Record<number, number> = Object.fromEntries([
    ...[8, 10, 12].map(m => [m, 30]),
    ...[1, 2, 4, 5, 6].map(m => [m, 31]),
    ...[3].map(m => [m, 32]),
    ...[7, 9, 11].map(m => [m, 29]),
]);

export const baseMonthDays2099: Record<number, number> = Object.fromEntries([
    ...[6, 7, 8, 11, 12].map(m => [m, 30]),
    ...[1, 3, 5].map(m => [m, 31]),
    ...[2, 4].map(m => [m, 32]),
    ...[9, 10].map(m => [m, 29]),
]);

export const baseMonthDaysAllYear: Record<number, number> = Object.fromEntries([
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(m => [m, 32]),
]);


export const baseMonth365DaysDefault: Record<number, number> = Object.fromEntries([
    ...[1, 3, 5, 7, 8, 10, 12].map(m => [m, 30]),
    ...[2, 4, 6, 9, 11].map(m => [m, 31]),
]);

export const Days366Default: Record<number, number> = Object.fromEntries([
    ...[1, 3, 5, 7, 8, 10, 12].map(m => [m, 30]),
    ...[2, 4, 6, 9, 11].map(m => [m, 31]),
]);

validateMultipleYears({ baseMonthDays2002 });

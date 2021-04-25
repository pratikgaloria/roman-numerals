import { RomanNumerals } from "./romanNumerals";

const valuesMap: Record<number, string> = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
  1001: "MI",
  1004: "MIV",
  1005: "MV",
  1006: "MVI",
  1009: "MIX",
  1010: "MX",
  1011: "MXI",
  2000: "MM",
  2040: "MMXL",
  2044: "MMXLIV",
  2045: "MMXLV",
  2050: "MML",
  2059: "MMLIX",
  2089: "MMLXXXIX",
  2090: "MMXC",
  3000: "MMM",
  3100: "MMMC",
  3141: "MMMCXLI",
  3153: "MMMCLIII",
  3189: "MMMCLXXXIX",
  3399: "MMMCCCXCIX",
  3400: "MMMCD",
  3499: "MMMCDXCIX",
  3500: "MMMD",
  3504: "MMMDIV",
  3889: "MMMDCCCLXXXIX",
  3900: "MMMCM",
  3905: "MMMCMV",
  3948: "MMMCMXLVIII",
  3998: "MMMCMXCVIII",
  3999: "MMMCMXCIX",
};

describe("romanNumerals", () => {
  describe("Integer to Roman", () => {
    test("should return undefined if value is invalid", () => {
      expect(RomanNumerals.toRoman(Number('abc'))).toBeUndefined();
    });

    test("should return undefined if value is out of range", () => {
      expect(RomanNumerals.toRoman(-1)).toBeUndefined();
      expect(RomanNumerals.toRoman(0)).toBeUndefined();
      expect(RomanNumerals.toRoman(4000)).toBeUndefined();
    });

    Object.keys(valuesMap).map((n) => {
      test(`should return valid Roman value for: ${n}`, () => {
        expect(RomanNumerals.toRoman(Number(n))).toBe(valuesMap[Number(n)]);
      });
    });
  });

  describe("Roman to Integer", () => {
    test("should return undefined if value is invalid", () => {
      expect(RomanNumerals.fromRoman('')).toBeUndefined();
      expect(RomanNumerals.fromRoman('A')).toBeUndefined();
    });
    

    Object.keys(valuesMap).map((n) => {
      test(`should return valid Integer value for: ${valuesMap[Number(n)]}`, () => {
        expect(RomanNumerals.fromRoman(valuesMap[Number(n)])).toBe(Number(n));
      });
    });
  });
});

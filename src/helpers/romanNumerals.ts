const numeralsMap: Record<string, number> = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

export class RomanNumerals {
  static toRoman(value: number) {
    if (isNaN(value) || value < 1 || value > 3999) {
      return undefined;
    }

    let decimalNumber = value;
    let result = '';

    while (decimalNumber > 0) {
      const v = decimalNumber;
      const highestBase = Object.keys(numeralsMap).reverse().find(k => v >= numeralsMap[k]);
      const remainder = highestBase ? v % numeralsMap[highestBase] : 0;

      if (highestBase) {
        const floor = Math.floor(v / numeralsMap[highestBase]);

        for (let i = 0; i < floor; i++) {
          result += highestBase;
        }
      } 
      
      decimalNumber = remainder;
    }

    return result;
  }

  static fromRoman(value: string) {
    const { IV, IX, XL, XC, CD, CM, ...map } = numeralsMap;

    if (!value || value.length <= 0) {
      return undefined;
    }

    const romanNumber = value.toUpperCase();
    let int = 0;

    for (let i = 0; i < romanNumber.length; i++) {
      if (map[romanNumber.charAt(i)] < map[romanNumber.charAt(i + 1)]) {
        int = int - map[romanNumber.charAt(i)];
      } else {
        int = int + map[romanNumber.charAt(i)];
      }
    }

    return isNaN(int) ? undefined : int;
  }
}

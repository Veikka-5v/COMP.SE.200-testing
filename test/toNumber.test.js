import toNumber from '../src/toNumber.js'

describe('toNumber', () => {
  describe('numbers', () => {
    test('returns a number unchanged', () => {
      expect(toNumber(3.2)).toBe(3.2)
    })
  })

  describe('strings', () => {
    test('converts a decimal string to a number', () => {
      expect(toNumber('3.2')).toBe(3.2)
    })
    test('ignores leading and trailing whitespace', () => {
      expect(toNumber('  5.90  ')).toBe(5.9)
    })
    test('converts an empty string to 0', () => {
      expect(toNumber('')).toBe(0)
    })
    test('returns NaN for a decimal comma', () => {
      expect(toNumber('5,90')).toBeNaN()
    })
    test('returns NaN for a number followed by a currency sign', () => {
      expect(toNumber('5.90 €')).toBeNaN()
    })
  })

  describe('null, undefined and booleans', () => {
    test('converts null to 0', () => {
      expect(toNumber(null)).toBe(0)
    })
    test('converts undefined to NaN', () => {
      expect(toNumber(undefined)).toBeNaN()
    })
    test('converts true to 1 and false to 0', () => {
      expect(toNumber(true)).toBe(1)
      expect(toNumber(false)).toBe(0)
    })
  })

})
import toString from '../src/toString.js'

describe('toString', () => {
  describe('strings', () => {
    test('returns the same string unchanged', () => {
      expect(toString('hello')).toBe('hello')
    })
    test('returns an empty string unchanged', () => {
      expect(toString('')).toBe('')
    })
    test('keeps special characters', () => {
      expect(toString('äö €')).toBe('äö €')
    })
  })

  describe('numbers', () => {
    test('converts a positive integer to a string', () => {
      expect(toString(42)).toBe('42')
    })
    test('converts a negative integer to a string', () => {
      expect(toString(-52)).toBe('-52')
    })
    test('converts a decimal number to a string', () => {
      expect(toString(5.9)).toBe('5.9')
    })
    test('preserves the sign of -0', () => {
      expect(toString(-0)).toBe('-0')
    })
    test('converts NaN to a string', () => {
      expect(toString(NaN)).toBe('NaN')
    })
    test('converts Infinity and -Infinity to strings', () => {
      expect(toString(Infinity)).toBe('Infinity')
      expect(toString(-Infinity)).toBe('-Infinity')
    })
  })

  describe('null and undefined', () => {
    test('returns an empty string for null', () => {
      expect(toString(null)).toBe('')
    })
    test('returns an empty string for undefined', () => {
      expect(toString(undefined)).toBe('')
    })
  })

  describe('arrays', () => {
    test('joins array elements with commas', () => {
      expect(toString(['a', 2, 'u'])).toBe('a,2,u')
    })
    test('converts the documented example [1, 2, 3]', () => {
      expect(toString([1, 2, 3])).toBe('1,2,3')
    })
    test('returns an empty string for an empty array', () => {
      expect(toString([])).toBe('')
    })
    test('converts null and undefined elements to empty strings', () => {
      expect(toString([1, null, undefined, 2])).toBe('1,,,2')
    })
  })

  describe('booleans', () => {
    test('converts true to a string', () => {
      expect(toString(true)).toBe('true')
    })
    test('converts false to a string', () => {
      expect(toString(false)).toBe('false')
    })
  })
})
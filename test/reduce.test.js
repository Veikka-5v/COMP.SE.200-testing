import reduce from '../src/reduce.js'

describe('reduce', () => {
  test('sums an array with an initial value', () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3)
  })

  test('uses the first element as the initial value when none is given', () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n)).toBe(6)
  })

  test('sums the values of an object', () => {
    expect(reduce({ a: 1, b: 2 }, (sum, n) => sum + n, 0)).toBe(3)
  })

  test('returns the initial value for an empty array', () => {
    expect(reduce([], (sum, n) => sum + n, 0)).toBe(0)
  })
})
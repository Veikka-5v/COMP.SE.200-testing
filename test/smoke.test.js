import isEmpty from '../src/isEmpty.js'

describe('Test environment smoke test', () => {
  test('Jest runs and can import the library', () => {
    expect(isEmpty([])).toBe(true)
  })

  test('jest-extended and jest-chain work', () => {
    expect([]).toBeArray().toBeEmpty()
  })
})
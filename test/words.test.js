import words from '../src/words.js'

describe('words', () => {
  test('splits a string into words', () => {
    expect(words('Jorma Pena ja Esa')).toEqual(['Jorma', 'Pena', 'ja', 'Esa'])
  })

  test('splits a string with punctuation and special characters into words', () => {
    expect(words('Jorma, Pena & Esa!')).toEqual(['Jorma', 'Pena', 'Esa'])
  })

  test('keeps Finnish letters in words', () => {
    expect(words('äidinkieli on hyvä')).toEqual(['äidinkieli', 'on', 'hyvä'])
  })

  test('splits camelCase words', () => {
    expect(words('honeyJar')).toEqual(['honey', 'Jar'])
  })

  test('returns an empty array for an empty string', () => {
    expect(words('')).toEqual([])
  })

  test('returns an empty array when no string is given', () => {
    expect(words()).toEqual([])
  })

  test('uses a custom pattern when one is given', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles'])
  })

  test('returns an empty array when the custom pattern does not match', () => {
    expect(words('honey', /[0-9]+/g)).toEqual([])
  })
})
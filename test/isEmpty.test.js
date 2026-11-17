import isEmpty from '../src/isEmpty.js'

describe('isEmpty', () => {

    describe('null and undefined', () => {
        test('returns true for null', () => {
            expect(isEmpty(null)).toBe(true)
        })
        test('returns true for undefined', () => {
            expect(isEmpty(undefined)).toBe(true)
        })
    })

    describe('arrays', () => {
        test('returns true for an empty array', () => {
            expect(isEmpty([])).toBe(true)
        })
        test('returns false for a non-empty array', () => {
            expect(isEmpty([1, 2, 3])).toBe(false)
        })
    })

    describe('booleans', () => {
        test('returns true for true', () => {
            expect(isEmpty(true)).toBe(true)
        })
        test('returns true for false', () => {
            expect(isEmpty(false)).toBe(true)
        })
    })

    describe('numbers', () => {
        test('returns true for 0', () => {
            expect(isEmpty(0)).toBe(true)
        })
        test('returns true for NaN', () => {
            expect(isEmpty(NaN)).toBe(true)
        })
        test('returns true for a non-zero number', () => {
            expect(isEmpty(42)).toBe(true)
        })
    })

    describe('strings', () => {
        test('returns true for an empty string', () => {
            expect(isEmpty('')).toBe(true)
        })
        test('returns false for a non-empty string', () => {
            expect(isEmpty('hello')).toBe(false)
        })
    })

    describe('maps', () => {
        test('returns true for an empty map', () => {
            expect(isEmpty(new Map())).toBe(true)
        })
        test('returns false for a non-empty map', () => {
            expect(isEmpty(new Map([['key', 'value']]))).toBe(false)
        })
    })

})
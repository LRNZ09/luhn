import { isNumberValidWithLuhnAlgorithm } from './is-number-valid'

describe('isNumberValidWithLuhnAlgorithm', () => {
	describe('not numbers', () => {
		test.each([{ value: '' }, { value: 'a' }, { value: ' ' }])(
			'with value `$value` returns false',
			({ value }) => {
				const isValid = isNumberValidWithLuhnAlgorithm(value)
				expect(isValid).toBe(false)
			},
		)
	})

	describe('numbers', () => {
		describe.each([
			// IMEI
			{ value: 490154203237511, expectedIsValid: false },
			{ value: 490154203237518, expectedIsValid: true },
			// Visa
			{ value: 4111111111111111, expectedIsValid: true },
			{ value: 4242424242424241, expectedIsValid: false },
			{ value: 4242424242424242, expectedIsValid: true },
			{ value: 4000056655665556, expectedIsValid: true },
			// MasterCard
			{ value: 5555555555554442, expectedIsValid: false },
			{ value: 5555555555554444, expectedIsValid: true },
			{ value: 2223003122003222, expectedIsValid: true },
			{ value: 5200828282828210, expectedIsValid: true },
			{ value: 5105105105105100, expectedIsValid: true },
			// Amex
			{ value: 378282246310000, expectedIsValid: false },
			{ value: 378282246310005, expectedIsValid: true },
			{ value: 371449635398431, expectedIsValid: true },
			// Discover
			{ value: 6011111111111111, expectedIsValid: false },
			{ value: 6011111111111117, expectedIsValid: true },
			{ value: 6011000990139424, expectedIsValid: true },
			// Diners Club
			{ value: 3056930009020000, expectedIsValid: false },
			{ value: 3056930009020004, expectedIsValid: true },
			{ value: 36227206271663, expectedIsValid: false },
			{ value: 36227206271667, expectedIsValid: true },
			// JCB
			{ value: 3566002020360506, expectedIsValid: false },
			{ value: 3566002020360505, expectedIsValid: true },
			// UnionPay
			{ value: 6200000000000009, expectedIsValid: false },
			{ value: 6200000000000005, expectedIsValid: true },
		])(
			'with value $value returns $expectedIsValid',
			({ value, expectedIsValid }) => {
				test.each([
					{ type: 'number', value },
					{ type: 'string', value: String(value) },
				])('as $type', ({ value }) => {
					const isValid = isNumberValidWithLuhnAlgorithm(value)
					expect(isValid).toBe(expectedIsValid)
				})
			},
		)
	})
})

/**
 * Validate a number against the Luhn algorithm.
 * @see
 * {@link https://en.wikipedia.org/wiki/Luhn_algorithm}
 *
 * @param value The number (stringified or not) to be validated.
 * @returns A boolean indicating if the number is valid or not.
 *
 * @example
 * ```ts
 * const isValid = isNumberValidWithLuhnAlgorithm('4000003800000008');
 * ```
 */
const isNumberValidWithLuhnAlgorithm = (value: string | number): boolean => {
	const [luhnKey, ...digits] = String(value)
		.split('')
		.reverse()
		.map((rawDigit) => Number.parseInt(rawDigit, 10))

	if (luhnKey === undefined) {
		return false
	}

	const sum = digits
		.map((digit, index) => {
			if (index % 2 !== 0) {
				return digit
			}

			const digitMultipliedByTwo = digit * 2

			if (digit >= 5) {
				return digitMultipliedByTwo - 9
			}

			return digitMultipliedByTwo
		})
		.reduce((partialSum, digit) => partialSum + digit, luhnKey)

	return sum % 10 === 0
}

export { isNumberValidWithLuhnAlgorithm }

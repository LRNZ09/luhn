module.exports = {
	'*': 'prettier --ignore-unknown --list-different --write',
	'*.{js,ts,tsx}': 'eslint --fix',
	'*.{ts,tsx}': 'tsc',
}

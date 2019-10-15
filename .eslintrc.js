module.exports = {
	root: true,
	plugins: ['prettier', 'react'],
	rules: {
		'prettier/prettier': 'error',
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
	},
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
};

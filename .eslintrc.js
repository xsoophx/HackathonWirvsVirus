module.exports = {
	extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	env: {
		browser: true
	},
	ignorePatterns: [
		'src/neo4j-graphql-js/',
		'build/'
	],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {},
		},
	},
	rules: {
		'react/jsx-filename-extension': [
			'error',
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: ['**/test.tsx', '**/test.ts'] },
		],
		'import/extensions': [
			'error',
			{'ts': 'never'}
		],
		indent: 'off',
		'@typescript-eslint/indent': ['error', 2],
		'comma-dangle': ['error', 'never'],
		'sort-imports': ['error', {
			'ignoreCase': false,
			'ignoreDeclarationSort': true,
			'ignoreMemberSort': false,
			'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
		}],
		quotes: ["error", "single", { "allowTemplateLiterals": true }]
	},
};

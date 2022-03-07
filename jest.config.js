module.exports = {
	preset: '@testing-library/react-native',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/assetsTransformer.js'
	},
	setupFilesAfterEnv: ['<rootDir>/jestSetup.js']
}

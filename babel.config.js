module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
				alias: {
					'@src': './src',
					'@api': './src/api',
					'@assets': './src/assets/',
					'@components': './src/components',
					'@features': './src/features',
					'@hooks': './src/hooks',
					'@mocks': './src/mocks',
					'@screens': './src/screens',
					'@theme': './src/theme',
					'@utils': './src/utils'
				}
			}
		],
		'@babel/plugin-transform-runtime'
	]
}

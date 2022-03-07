/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import { App } from './src/App'
import { Providers } from './src/utils/Providers'

const AppWrapper = () => (
	<Providers>
		<App />
	</Providers>
)

AppRegistry.registerComponent(appName, () => AppWrapper)

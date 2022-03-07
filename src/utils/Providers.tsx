import React, { FC } from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components/native'

import { AppStore, setupStore } from '@src/store'
import { schema } from '@theme/schema'

const originalStore = setupStore()

export const ProvideTheme: FC = ({ children }) => (
	<ThemeProvider theme={schema.light}>{children}</ThemeProvider>
)

export const Providers: FC<{ store: AppStore }> = ({
	children,
	store = originalStore
}) => (
	<Provider store={store}>
		<ProvideTheme>{children}</ProvideTheme>
	</Provider>
)

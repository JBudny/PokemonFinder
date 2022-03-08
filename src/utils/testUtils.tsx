import React from 'react'

import type { PreloadedState } from '@reduxjs/toolkit'
import type { RenderOptions } from '@testing-library/react-native'
import { render } from '@testing-library/react-native'

import type { AppStore, RootState } from '@src/store'
import { setupStore } from '@src/store'

import { Providers } from './Providers'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store. For
// future dependencies, such as wanting to test with react-router, you can extend
// this interface to accept a path and route and use those in a <MemoryRouter />
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>
	store?: AppStore
}

const renderWithProviders = (
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	const Wrapper: React.FC = ({ children }) => (
		<Providers store={store}>{children}</Providers>
	)

	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export { renderWithProviders }

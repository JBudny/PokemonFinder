import React from 'react'

import { renderWithProviders } from '@src/utils/testUtils'

import { LoadingIndicator } from './LoadingIndicator'

test('LoadingIndicator component should match the snapshot', () => {
	const loadingIndicator = renderWithProviders(<LoadingIndicator />)

	expect(loadingIndicator).toMatchSnapshot()
})

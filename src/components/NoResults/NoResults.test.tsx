import React from 'react'

import { renderWithProviders } from '@utils/testUtils'

import { NoResults } from './NoResults'

test('NoResults component should match the snapshot', () => {
	const noResults = renderWithProviders(<NoResults />)

	expect(noResults).toMatchSnapshot()
})

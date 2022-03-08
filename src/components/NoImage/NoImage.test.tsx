import React from 'react'

import { renderWithProviders } from '@utils/testUtils'

import { NoImage } from './NoImage'

test('NoImage component should match the snapshot', () => {
	const noImage = renderWithProviders(<NoImage />)

	expect(noImage).toMatchSnapshot()
})

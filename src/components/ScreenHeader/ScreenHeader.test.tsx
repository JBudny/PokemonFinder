import React from 'react'

import { renderWithProviders } from '@src/utils/testUtils'

import { ScreenHeader } from './ScreenHeader'

test('ScreenHeader component should display screen title', () => {
	const { getByText } = renderWithProviders(<ScreenHeader text="Test title" />)

	expect(getByText('Test title')).toBeDefined()
})

test('ScreenHeader component should match the snapshot', () => {
	const screenHeader = renderWithProviders(<ScreenHeader text="Test title" />)

	expect(screenHeader).toMatchSnapshot()
})

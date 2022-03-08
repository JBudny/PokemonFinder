import React from 'react'
import { Text } from 'react-native'

import { renderWithProviders } from '@src/utils/testUtils'

import { HomeScreenContent } from './HomeScreenContent'

test('HomeScreenContent component should display the children', () => {
	const { getByText } = renderWithProviders(
		<HomeScreenContent>
			<Text>Content text</Text>
		</HomeScreenContent>
	)

	expect(getByText('Content text')).toBeDefined()
})

test('HomeScreenContent component should match the snapshot', () => {
	const screenHeader = renderWithProviders(
		<HomeScreenContent>
			<Text>Content text</Text>
		</HomeScreenContent>
	)

	expect(screenHeader).toMatchSnapshot()
})

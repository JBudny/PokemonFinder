import React from 'react'

import { renderWithProviders } from '@utils/testUtils'

import { BodyText } from './BodyText'

test('BodyText component should display provided text', () => {
	const { getByText } = renderWithProviders(
		<BodyText size="small" text="test text" />
	)

	expect(getByText('test text')).toBeDefined()
})

test('BodyText component return proper text size 16dp size text', () => {
	const { getByText } = renderWithProviders(
		<BodyText size="small" text="test text" />
	)
	expect(getByText('test text')).toHaveStyle({ fontSize: 16 })
})

test('BodyText component with medium text prop should return 20dp size text', () => {
	const { getByText } = renderWithProviders(
		<BodyText size="medium" text="test text" />
	)
	expect(getByText('test text')).toHaveStyle({ fontSize: 20 })
})

test('BodyText component with large text prop should return 25dp size text', () => {
	const { getByText } = renderWithProviders(
		<BodyText size="large" text="test text" />
	)
	expect(getByText('test text')).toHaveStyle({ fontSize: 25 })
})

test('BodyText component should match snapshot', () => {
	const text = renderWithProviders(<BodyText size="small" text="test text" />)

	expect(text).toMatchSnapshot()
})

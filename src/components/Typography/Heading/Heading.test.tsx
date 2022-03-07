import React from 'react'

import { renderWithProviders } from '@src/utils/testUtils'

import { Heading } from './Heading'

test('Heading component should display provided text', () => {
	const { getByText } = renderWithProviders(
		<Heading size="small" text="test text" />
	)

	expect(getByText('test text')).toBeDefined()
})

test('Heading component with small text prop should return 20dp size text', () => {
	const { getByText } = renderWithProviders(
		<Heading size="small" text="test text" />
	)
	expect(getByText('test text')).toHaveStyle({ fontSize: 20 })
})

test('Heading component with medium text prop should return 25dp size text', () => {
	const { getByText } = renderWithProviders(
		<Heading size="medium" text="test text" />
	)
	expect(getByText('test text')).toHaveStyle({ fontSize: 25 })
})

test('Heading component with large text prop should return 35dp size text', () => {
	const { getByText } = renderWithProviders(
		<Heading size="large" text="test text" />
	)
	expect(getByText('test text')).toHaveStyle({ fontSize: 35 })
})

test('Heading component should match snapshot', () => {
	const text = renderWithProviders(<Heading size="small" text="test text" />)

	expect(text).toMatchSnapshot()
})

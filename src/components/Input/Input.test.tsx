import React from 'react'

import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { renderWithProviders } from '@utils/testUtils'

import { Input } from './Input'

test('Input component should display icon when icon prop is passed', () => {
	const { getByTestId } = renderWithProviders(<Input icon={faSearch} />)

	expect(getByTestId('icon')).toBeDefined()
})

test('Input component should not display icon when icon prop is not passed', () => {
	const { queryByTestId } = renderWithProviders(<Input />)

	expect(queryByTestId('icon')).toBeNull()
})

test('Input component should match snapshot', () => {
	const input = renderWithProviders(<Input icon={faSearch} />)

	expect(input).toMatchSnapshot()
})

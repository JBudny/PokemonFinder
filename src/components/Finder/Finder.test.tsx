import React, { FC } from 'react'
import { Text } from 'react-native'

import { fireEvent } from '@testing-library/react-native'

import { renderWithProviders } from '@utils/testUtils'

import { Finder } from './Finder'
import { ItemBase } from './Finder.types'

const placeholderText = 'Eg. bulbasaur'
const searchTerm = 'test term'
const onChangeTextMock = jest.fn()
const TestItem: FC<{ item: ItemBase }> = ({ item }) => <Text>{item.id}</Text>
const LoadingIndicator: FC = () => <Text>Loading...</Text>
const NoResults: FC = () => <Text>No results</Text>

afterEach(() => {
	jest.clearAllMocks()
})

test('Finder component should display placeholder text', () => {
	const { getByPlaceholderText } = renderWithProviders(
		<Finder
			data={undefined}
			isSuccess={false}
			isFetching={false}
			isError={false}
			textInputProps={{
				onChangeText: onChangeTextMock,
				placeholder: placeholderText
			}}
			ItemComponent={TestItem}
			LoadingIndicator={LoadingIndicator}
			NoResults={NoResults}
		/>
	)
	const placeholder = getByPlaceholderText(placeholderText)

	expect(placeholder).toBeDefined()
})

test('Finder component should display no results when api returns undefined', () => {
	const { getByText } = renderWithProviders(
		<Finder
			data={undefined}
			isSuccess
			isFetching={false}
			isError={false}
			textInputProps={{
				onChangeText: onChangeTextMock,
				placeholder: placeholderText
			}}
			ItemComponent={TestItem}
			LoadingIndicator={LoadingIndicator}
			NoResults={NoResults}
		/>
	)
	const noResultsText = getByText('No results')
	expect(noResultsText).toBeDefined()
})

test('Finder component should display loading indicator while fetching', () => {
	const { queryByText } = renderWithProviders(
		<Finder
			data={undefined}
			isSuccess={false}
			isFetching
			isError={false}
			textInputProps={{
				onChangeText: onChangeTextMock,
				placeholder: placeholderText
			}}
			ItemComponent={TestItem}
			LoadingIndicator={LoadingIndicator}
			NoResults={NoResults}
		/>
	)
	const loadingText = queryByText('Loading...')
	expect(loadingText).toBeDefined()
})

test('Finder component should display results when api returns success response', () => {
	const { getByText } = renderWithProviders(
		<Finder
			data={{ id: '123' }}
			isSuccess
			isFetching={false}
			isError={false}
			textInputProps={{
				onChangeText: onChangeTextMock,
				placeholder: placeholderText
			}}
			ItemComponent={TestItem}
			LoadingIndicator={LoadingIndicator}
			NoResults={NoResults}
		/>
	)
	const resultsItem = getByText('123')
	expect(resultsItem).toBeDefined()
})

test('Finder component should call onChangeText function after user input', () => {
	const { getByPlaceholderText } = renderWithProviders(
		<Finder
			data={undefined}
			isSuccess={false}
			isFetching={false}
			isError={false}
			textInputProps={{
				onChangeText: onChangeTextMock,
				placeholder: placeholderText
			}}
			ItemComponent={TestItem}
			LoadingIndicator={LoadingIndicator}
			NoResults={NoResults}
		/>
	)
	const item = getByPlaceholderText(placeholderText)
	fireEvent.changeText(item, searchTerm)
	expect(onChangeTextMock).toBeCalledTimes(1)
})

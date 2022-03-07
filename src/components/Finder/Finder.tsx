import React from 'react'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { isUndefined } from 'lodash'

import { Input } from '@components/Input/Input'

import { StyledFinder } from './Finder.styled'
import { FinderProps } from './Finder.types'
import { StatusIndicator } from './StatusIndicator/StatusIndicator'

/**
 * Gets required parameters and returns a Finder component.
 * @param data - data to be displayed in the list.
 * @param isError - boolean to indicate if there is an error.
 * @param isSuccess - boolean to indicate if the request was successful.
 * @param isFetching - boolean to indicate if the request is in progress.
 * @param ItemComponent - component to be used to render each item in the list.
 * @param LoadingIndicator - component to be rendered while isFetching is truthy.
 * @param NoResults - component to be rendered while isError is truthy.
 * @param textInputProps - props to be passed to the Input component.
 */
export const Finder = <ItemT extends { id: string }>({
	data,
	isError,
	isSuccess,
	isFetching,
	ItemComponent,
	LoadingIndicator,
	NoResults,
	textInputProps
}: FinderProps<ItemT>) => (
	<StyledFinder>
		<Input icon={faSearch} {...textInputProps} />
		{isSuccess && !isFetching && data && <ItemComponent item={data} />}
		{isFetching && (
			<StatusIndicator>
				{LoadingIndicator && <LoadingIndicator />}
			</StatusIndicator>
		)}
		{isError && <StatusIndicator>{NoResults && <NoResults />}</StatusIndicator>}
		{isSuccess && isUndefined(data) && (
			<StatusIndicator>{NoResults && <NoResults />}</StatusIndicator>
		)}
	</StyledFinder>
)

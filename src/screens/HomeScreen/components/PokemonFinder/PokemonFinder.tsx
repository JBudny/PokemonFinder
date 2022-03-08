import React, { FC, useState } from 'react'

import { skipToken } from '@reduxjs/toolkit/dist/query'

import { usePokemonQuery } from '@api/pokemonAPI'
import { Finder } from '@components/Finder/Finder'
import { LoadingIndicator } from '@components/LoadingIndicator/LoadingIndicator'
import { NoResults } from '@components/NoResults/NoResults'
import { useDebounce } from '@hooks/useDebounce/useDebounce'

import { PokemonCard } from './PokemonCard/PokemonCard'

/**
 * Instance of the Finder component.
 */
export const PokemonFinder: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string | null>(null)
	const debouncedSearchTerm = useDebounce(searchTerm, 500)
	const { data, isError, isSuccess, isFetching } = usePokemonQuery(
		debouncedSearchTerm || skipToken
	)

	const handleChangeText = (text: string) => setSearchTerm(text)

	return (
		<Finder
			data={data}
			isSuccess={isSuccess}
			isFetching={isFetching}
			isError={isError}
			textInputProps={{
				onChangeText: handleChangeText,
				placeholder: 'Eg. bulbasaur'
			}}
			ItemComponent={PokemonCard}
			LoadingIndicator={LoadingIndicator}
			NoResults={NoResults}
		/>
	)
}

import Config from 'react-native-config'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { PokemonItem } from './types/pokemonItem.types'
import { pokemonQueryFn } from './utils/pokemonQueryFn'

const { POKEMON_API_BASE_URL } = Config

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: POKEMON_API_BASE_URL }),
	keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
	endpoints: (build) => ({
		pokemon: build.query<PokemonItem, string>({
			queryFn: pokemonQueryFn
		})
	})
})

export const { usePokemonQuery } = api

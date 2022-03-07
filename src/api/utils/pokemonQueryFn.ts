import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes'

import { transformPokemon } from './transformPokemon'

/**
 * Custom query function for the Pokemon API with error handling behavior
 * and data transformation logic.
 */
export const pokemonQueryFn = async (
	nameArg: string,
	_queryApi: BaseQueryApi,
	_extraOptions: Record<string, unknown>,
	fetchWithBQ: any
) => {
	const { data } = await fetchWithBQ(`/pokemon/${nameArg.toLowerCase()}`)

	try {
		return transformPokemon(data)
	} catch (e) {
		return {
			error: {
				status: 404,
				statusText: 'Pokemon not found!',
				data: undefined
			}
		}
	}
}

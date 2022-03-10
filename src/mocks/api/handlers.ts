import Config from 'react-native-config'

import { rest } from 'msw'

import { dummyPokemon } from '@mocks/dummyPokemon'

const { POKEMON_API_BASE_URL } = Config

export const handlers = [
	rest.get(`${POKEMON_API_BASE_URL}/pokemon/*`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(dummyPokemon))
	})
]

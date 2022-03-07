import { rest } from 'msw'

import { dummyPokemon } from '@mocks/dummyPokemon'

export const handlers = [
	rest.get('*/pokemon/:id', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(dummyPokemon))
	})
]

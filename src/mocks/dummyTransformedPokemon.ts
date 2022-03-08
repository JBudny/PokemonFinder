import { transformPokemon } from '@api/utils/transformPokemon'

import { dummyPokemon } from './dummyPokemon'

export const dummyTransformedPokemon = transformPokemon(dummyPokemon).data

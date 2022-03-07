import { Pokemon } from '@api/types/Pokemon'

import { PokemonItem } from '../types/pokemonItem.types'

interface TransformedPokemon {
	data: PokemonItem
}

export const transformPokemon = (pokemon: Pokemon): TransformedPokemon => {
	const { abilities, id, name, sprites, stats } = pokemon

	return {
		data: {
			abilities: abilities
				? abilities.map((ability) => ability.ability.name).join(', ')
				: '',
			id: id.toString(),
			name,
			stats,
			sprite: sprites.other['official-artwork'].front_default
		}
	}
}

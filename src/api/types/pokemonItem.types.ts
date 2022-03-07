import { PokemonStat } from './Pokemon'

export interface PokemonItem {
	abilities: string
	id: string
	name: string
	sprite: null | string
	stats: PokemonStat[]
}

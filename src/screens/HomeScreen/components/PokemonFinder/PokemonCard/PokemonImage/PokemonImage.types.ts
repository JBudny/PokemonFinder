export interface DisplayImageProps {
	uri: string
	handleImageLoadStart: () => void
	handleImageLoadEnd: () => void
}

export interface PokemonImageProps {
	sprite: string | null
}

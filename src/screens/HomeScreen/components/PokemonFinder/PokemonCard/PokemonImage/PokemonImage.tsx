import React, { FC, useState } from 'react'

import { LoadingIndicator } from '@components/LoadingIndicator/LoadingIndicator'
import { NoImage } from '@components/NoImage/NoImage'

import { StyledImage, StyledImageWrapper } from './PokemonImage.styled'
import { DisplayImageProps, PokemonImageProps } from './PokemonImage.types'

/**
 * Result pokemon image
 * @param uri - image uri
 * @param handleImageLoadStart - image load start handler
 * @param handleImageLoadEnd - image load end handler
 */
const DisplayPokemon: FC<DisplayImageProps> = ({
	uri,
	handleImageLoadStart,
	handleImageLoadEnd
}) => {
	return (
		<StyledImage
			source={{ uri }}
			onLoadStart={handleImageLoadStart}
			onLoadEnd={handleImageLoadEnd}
			testID="official-artwork"
		/>
	)
}

/**
 * Renders a pokemon image with a loading indicator and a no image placeholder if the image is not found.
 * @param sprite - The pokemon image url.
 */
export const PokemonImage: FC<PokemonImageProps> = ({ sprite }) => {
	const [imageLoading, setImageLoading] = useState(false)
	const handleImageLoadStart = () => setImageLoading(true)
	const handleImageLoadEnd = () => setImageLoading(false)

	return (
		<StyledImageWrapper>
			{sprite && (
				<DisplayPokemon
					uri={sprite}
					handleImageLoadEnd={handleImageLoadEnd}
					handleImageLoadStart={handleImageLoadStart}
				/>
			)}
			{sprite && imageLoading && <LoadingIndicator />}
			{!sprite && <NoImage />}
		</StyledImageWrapper>
	)
}

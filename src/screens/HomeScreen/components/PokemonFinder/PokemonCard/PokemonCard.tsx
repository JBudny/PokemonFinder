import React, { FC, useEffect, useRef } from 'react'
import { Animated } from 'react-native'

import { isEmpty } from 'lodash'

import { BodyText } from '@components/Typography/BodyText/BodyText'

import { StyledPokemonCard, StyledPokemonName } from './PokemonCard.styled'
import { PokemonCardProps } from './PokemonCard.types'
import { PokemonImage } from './PokemonImage/PokemonImage'
import { PokemonStats } from './PokemonStats/PokemonStats'

/**
 * Card used to display a pokemon.
 * @param item
 */
export const PokemonCard: FC<PokemonCardProps> = ({ item: pokemon }) => {
	const translation = useRef(new Animated.Value(-400)).current
	useEffect(() => {
		Animated.spring(translation, {
			toValue: isEmpty(pokemon) ? -400 : 0,
			bounciness: 10,
			useNativeDriver: true
		}).start()
	}, [pokemon, translation])
	const { sprite, name, abilities, stats } = pokemon

	return (
		<Animated.View
			style={{
				transform: [{ translateY: translation }],
				overflow: 'hidden'
			}}
		>
			<StyledPokemonCard>
				<PokemonImage sprite={sprite} />
				<StyledPokemonName size="large" text={name} />
				<BodyText size="medium" text={abilities} />
				<PokemonStats stats={stats} />
			</StyledPokemonCard>
		</Animated.View>
	)
}

import React, { FC } from 'react'

import { BodyText } from '@components/Typography/BodyText/BodyText'

import {
	StyledStat,
	StyledStatName,
	StyledStatsWrapper
} from './PokemonStats.styled'
import { PokemonStatsProps } from './PokemonStats.types'

/**
 * Renders a pokemon stats section.
 * @param stats - The pokemon stats object.
 */
export const PokemonStats: FC<PokemonStatsProps> = ({ stats }) => (
	<StyledStatsWrapper>
		{stats.map(({ stat, base_stat }) => {
			const { name: statName } = stat

			return (
				<StyledStat key={statName} testID="pokemon-stat">
					<StyledStatName text={statName} size="small" />
					<BodyText text={base_stat.toString()} size="small" />
				</StyledStat>
			)
		})}
	</StyledStatsWrapper>
)

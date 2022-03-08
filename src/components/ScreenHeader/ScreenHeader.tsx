import React, { FC } from 'react'

import { Heading } from '../Typography/Heading/Heading'
import { StyledScreenHeader } from './ScreenHeader.styled'
import { ScreenHeaderProps } from './ScreenHeader.types'

/**
 * Screen header.
 * @param text
 */
export const ScreenHeader: FC<ScreenHeaderProps> = ({ text }) => (
	<StyledScreenHeader>
		<Heading text={text} size="large" />
	</StyledScreenHeader>
)

import React, { FC } from 'react'

import { TypographyProps } from '@components/Typography/Typography.types'

import { StyledHeading } from './Heading.styled'

/**
 * Heading component based on Text core component.
 * @param size
 * @param text
 * EXTENDS: TextProps
 */
export const Heading: FC<TypographyProps> = ({ size, text, ...props }) => (
	<StyledHeading size={size} {...props}>
		{text}
	</StyledHeading>
)

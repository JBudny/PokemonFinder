import React, { FC } from 'react'

import { TypographyProps } from '@components/Typography/Typography.types'

import { StyledBodyText } from './BodyText.styled'

/**
 * BodyText component
 * @param size
 * @param text
 * EXTENDS: TextProps
 */
export const BodyText: FC<TypographyProps> = ({ size, text, ...props }) => (
	<StyledBodyText size={size} {...props}>
		{text}
	</StyledBodyText>
)

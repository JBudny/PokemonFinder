import React, { FC } from 'react'

import { StyledHomeScreenContent } from './HomeScreenContent.styled'

/**
 * Home screen content wrapper.
 */
export const HomeScreenContent: FC = ({ children }) => (
	<StyledHomeScreenContent>{children}</StyledHomeScreenContent>
)

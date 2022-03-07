import React, { FC } from 'react'
import { ViewProps } from 'react-native'

import { StyledStatusIndicator } from './StatusIndicator.styled'

/**
 * Wrapper for the status of an ongoing request.
 * EXTENDS: View
 */
export const StatusIndicator: FC<ViewProps> = ({ children, ...props }) => (
	<StyledStatusIndicator {...props}>{children}</StyledStatusIndicator>
)

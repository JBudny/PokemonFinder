import React, { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useTheme } from 'styled-components/native'

import {
	StyledIconWrapper,
	StyledInputWrapper,
	StyledTextInput
} from './Input.styled'
import { InputProps } from './Input.types'

/**
 * Gets required parameters and renders a text input.
 * @param icon
 * EXTENDS: TextInput
 */
export const Input: FC<InputProps> = ({ icon, ...props }) => {
	const { palette } = useTheme()

	return (
		<StyledInputWrapper>
			{icon && (
				<StyledIconWrapper testID="icon">
					<FontAwesomeIcon size={20} color={palette.textLight} icon={icon} />
				</StyledIconWrapper>
			)}
			<StyledTextInput {...props} />
		</StyledInputWrapper>
	)
}

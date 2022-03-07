import { TextInput, TextInputProps, View } from 'react-native'

import styled from 'styled-components/native'

export const StyledInputWrapper = styled(View)`
	background-color: ${({ theme }) => theme.palette.secondary};
	min-height: ${({ theme }) => theme.designSystem.minTouchTargetSize}px;
	min-width: ${({ theme }) => theme.designSystem.minTouchTargetSize}px;
	border-radius: ${({ theme }) => theme.designSystem.borderRadius}px;
	flex-direction: row;
	align-items: center;
	padding: ${({ theme }) => theme.designSystem.spacingMedium}px;
`

export const StyledIconWrapper = styled(View)`
	justify-content: center;
	align-items: center;
	margin-right: ${({ theme }) => theme.designSystem.spacingMedium}px;
`

export const StyledTextInput = styled(TextInput).attrs<TextInputProps>(
	({ theme }) => ({
		placeholderTextColor: theme.palette.textLight
	})
)`
	flex: 1;
	font-size: ${({ theme }) => theme.designSystem.bodyTextMediumSize}px;
	color: ${({ theme }) => theme.palette.text};
	padding: 0;
`

import { TextProps } from 'react-native'

export interface TextSize {
	size: 'large' | 'medium' | 'small'
}

export interface TypographyProps extends TextSize, TextProps {
	text: string
}

import { DefaultTheme } from 'styled-components/native'

export interface DesignSystem {
	borderRadius: number
	shadowSmall: number
	shadowMedium: number
	shadowLarge: number
	spacingSmall: number
	spacingMedium: number
	spacingLarge: number
	minTouchTargetSize: number
	headingLargeSize: number
	headingMediumSize: number
	headingSmallSize: number
	bodyTextLargeSize: number
	bodyTextMediumSize: number
	bodyTextSmallSize: number
	headingWeight: string
	bodyTextWeight: string
}

export type ThemeName = 'light'

interface Theme extends DefaultTheme {
	name: ThemeName
	designSystem: DesignSystem
}

export interface Schema {
	light: Theme
}

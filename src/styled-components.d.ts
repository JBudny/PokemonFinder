import 'styled-components/native'

import { DesignSystem } from './theme/theme.types'

declare module 'styled-components/native' {
	export interface DefaultTheme {
		name: ThemeName
		palette: {
			primary: string
			secondary: string
			text: string
			textLight: string
			accent: string
		}
		designSystem: DesignSystem
	}
}

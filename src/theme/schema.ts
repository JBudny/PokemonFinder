import { designSystem } from './designSystem'
import { Schema } from './theme.types'

export const schema: Schema = {
	light: {
		name: 'light',
		palette: {
			primary: 'rgb(39, 93, 173)',
			secondary: 'rgb(255, 255, 255)',
			text: 'rgb(33, 26, 29)',
			textLight: 'rgb(150, 150, 150)',
			accent: 'rgb(212, 241, 255)'
		},
		designSystem: {
			...designSystem
		}
	}
}

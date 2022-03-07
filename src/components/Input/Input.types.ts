import { TextInputProps } from 'react-native'

import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface InputProps extends TextInputProps {
	icon?: IconProp
}

import React, { FC } from 'react'

import LottieView from 'lottie-react-native'

import { noImage } from '@assets/animations/index'

/**
 * Animated no image component.
 */
export const NoImage: FC = () => (
	<LottieView
		source={noImage}
		autoPlay
		loop
		style={{ height: 150 }}
		testID="no-image-animation"
	/>
)

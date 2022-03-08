import React, { FC } from 'react'

import LottieView from 'lottie-react-native'

import { loadingIndicator } from '@assets/animations'

/**
 * Animation used as a loading indicator.
 */
export const LoadingIndicator: FC = () => (
	<LottieView
		source={loadingIndicator}
		autoPlay
		loop
		style={{ height: 250 }}
		testID="loading-indicator-animation"
	/>
)

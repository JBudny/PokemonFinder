import React, { FC } from 'react'

import LottieView from 'lottie-react-native'

import { noResults } from '@assets/animations/index'

/**
 * Animated no results component.
 */
export const NoResults: FC = () => (
	<LottieView
		source={noResults}
		autoPlay
		loop
		style={{ height: 250 }}
		testID="no-results-animation"
	/>
)

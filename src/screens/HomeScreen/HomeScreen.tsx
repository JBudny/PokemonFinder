import React, { FC } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

import { ScreenHeader } from '@src/components/ScreenHeader/ScreenHeader'

import { HomeScreenContent } from './components/HomeScreenContent/HomeScreenContent'

export const HomeScreen: FC = () => {
	return (
		<SafeAreaView>
			<ScrollView>
				<ScreenHeader text="Pokemon Finder" />
				<HomeScreenContent />
			</ScrollView>
		</SafeAreaView>
	)
}

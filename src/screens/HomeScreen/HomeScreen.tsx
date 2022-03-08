import React, { FC } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

import { ScreenHeader } from '@components/ScreenHeader/ScreenHeader'

import { HomeScreenContent } from './components/HomeScreenContent/HomeScreenContent'
import { PokemonFinder } from './components/PokemonFinder/PokemonFinder'

export const HomeScreen: FC = () => {
	return (
		<SafeAreaView>
			<ScrollView>
				<ScreenHeader text="Pokemon Finder" />
				<HomeScreenContent>
					<PokemonFinder />
				</HomeScreenContent>
			</ScrollView>
		</SafeAreaView>
	)
}

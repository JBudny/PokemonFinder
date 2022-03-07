import {
	combineReducers,
	configureStore,
	PreloadedState
} from '@reduxjs/toolkit'

import { api } from '@api/pokemonAPI'

const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
	configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(api.middleware),
		preloadedState
	})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

import React from 'react'
import Config from 'react-native-config'

import { act, fireEvent } from '@testing-library/react-native'
import { rest } from 'msw'

import { setupStore } from '@src/store'
import { server } from '@mocks/api/server'
import { dummyPokemon } from '@mocks/dummyPokemon'
import { dummyTransformedPokemon } from '@mocks/dummyTransformedPokemon'
import { renderWithProviders } from '@utils/testUtils'

import { PokemonFinder } from './PokemonFinder'

const { POKEMON_API_BASE_URL } = Config

const placeholder = 'Eg. bulbasaur'
const { sprite, name, abilities } = dummyTransformedPokemon

beforeEach(() => {
	jest.useFakeTimers()
})

afterEach(() => {
	jest.useRealTimers()
})

const delay = 500

test('PokemonFinder should display proper results', async () => {
	const store = setupStore()
	const { findByText, getByPlaceholderText, findAllByTestId } =
		renderWithProviders(<PokemonFinder />, { store })
	const searchInput = getByPlaceholderText(placeholder)
	fireEvent.changeText(searchInput, name)
	act(() => {
		jest.advanceTimersByTime(delay)
	})
	const nameText = await findByText(name)
	const abilitiesText = await findByText(abilities)
	const statsElements = await findAllByTestId('pokemon-stat')
	expect(nameText).toBeTruthy()
	expect(abilitiesText).toBeTruthy()
	expect(statsElements).toHaveLength(6)
})

test('PokemonFinder should display image with proper source', async () => {
	const store = setupStore()
	const { findByTestId, getByPlaceholderText } = renderWithProviders(
		<PokemonFinder />,
		{ store }
	)
	const searchInput = getByPlaceholderText(placeholder)
	fireEvent.changeText(searchInput, name)
	act(() => {
		jest.advanceTimersByTime(delay)
	})
	const image = await findByTestId('official-artwork')
	expect(image.props.source.uri).toBe(sprite)
})

test('PokemonFinder should display no image animation if sprite is null', async () => {
	server.use(
		rest.get(`${POKEMON_API_BASE_URL}/pokemon/*`, (_req, res, ctx) => {
			return res(
				ctx.json({
					...dummyPokemon,
					sprites: { other: { 'official-artwork': { front_default: null } } }
				})
			)
		})
	)
	const store = setupStore()
	const { getByPlaceholderText, findByTestId } = renderWithProviders(
		<PokemonFinder />,
		{ store }
	)
	const searchInput = getByPlaceholderText(placeholder)
	fireEvent.changeText(searchInput, name)
	act(() => {
		jest.advanceTimersByTime(delay)
	})
	const noImageAnimation = await findByTestId('no-image-animation')
	expect(noImageAnimation).toBeDefined()
})

test('PokemonFinder result should match the snapshot', async () => {
	const store = setupStore()
	const result = renderWithProviders(<PokemonFinder />, { store })
	const searchInput = result.getByPlaceholderText(placeholder)
	fireEvent.changeText(searchInput, name)
	act(() => {
		jest.advanceTimersByTime(delay)
	})
	await result.findByText(name)
	expect(result).toMatchSnapshot()
})

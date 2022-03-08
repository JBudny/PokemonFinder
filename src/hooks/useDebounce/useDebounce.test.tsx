import { act, renderHook } from '@testing-library/react-hooks'

import { useDebounce } from './useDebounce'

const newValue = 'newValue'
const delay = 500

beforeEach(() => {
	jest.useFakeTimers()
})

afterEach(() => {
	jest.useRealTimers()
})

test('useDebounce hook should return null before specified delay', () => {
	const { result } = renderHook(() => useDebounce(newValue, delay))

	expect(result.current).toBe(null)
})

test('useDebounce hook should return debounced value after specified delay', () => {
	const { result } = renderHook(() => useDebounce(newValue, delay))
	act(() => {
		jest.advanceTimersByTime(delay)
	})

	expect(result.current).toBe(newValue)
})

import { useEffect, useState } from 'react'

/**
 * Hook for debouncing a string value.
 * @param value The value to debounce.
 * @param delay The delay in milliseconds.
 */
export const useDebounce = (value: string | null, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState<null | string>(null)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])

	return debouncedValue
}

import { FC } from 'react'
import { TextInputProps } from 'react-native'

export interface ItemBase {
	id: string
}

export interface FinderProps<ItemT extends ItemBase> {
	data?: ItemT
	isError: boolean
	isSuccess: boolean
	isFetching: boolean
	ItemComponent: FC<{ item: ItemT }>
	LoadingIndicator: FC
	NoResults: FC
	textInputProps: TextInputProps
}

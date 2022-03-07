import { Text } from 'react-native'

import styled from 'styled-components/native'

import { TextSize } from '@components/Typography/Typography.types'

export const StyledBodyText = styled(Text)<TextSize>`
	font-size: ${({ size, theme }) =>
		(size === 'large' && `${theme.designSystem.bodyTextLargeSize}px`) ||
		(size === 'medium' && `${theme.designSystem.bodyTextMediumSize}px`) ||
		(size === 'small' && `${theme.designSystem.bodyTextSmallSize}px`)};
	font-weight: ${({ theme }) => theme.designSystem.bodyTextWeight};
	color: ${({ theme }) => theme.palette.text};
`

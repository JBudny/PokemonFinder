import { Text } from 'react-native'

import styled from 'styled-components/native'

import { TextSize } from '@components/Typography/Typography.types'

export const StyledHeading = styled(Text)<TextSize>`
	font-size: ${({ size, theme }) =>
		(size === 'large' && `${theme.designSystem.headingLargeSize}px`) ||
		(size === 'medium' && `${theme.designSystem.headingMediumSize}px`) ||
		(size === 'small' && `${theme.designSystem.headingSmallSize}px`)};
	font-weight: ${({ theme }) => theme.designSystem.headingWeight};
	color: ${({ theme }) => theme.palette.secondary};
`

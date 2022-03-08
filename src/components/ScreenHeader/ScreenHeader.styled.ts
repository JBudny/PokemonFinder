import { View } from 'react-native'

import styled from 'styled-components/native'

export const StyledScreenHeader = styled(View)`
	background-color: ${({ theme }) => theme.palette.primary};
	padding: ${({ theme }) => theme.designSystem.spacingLarge}px;
	height: 180px;
`

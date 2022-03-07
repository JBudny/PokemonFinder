import { View } from 'react-native'

import styled from 'styled-components/native'

export const StyledFinder = styled(View)`
	background-color: ${({ theme }) => theme.palette.secondary};
	border-radius: ${({ theme }) => theme.designSystem.borderRadius}px;
	elevation: ${({ theme }) => theme.designSystem.shadowLarge};
	overflow: hidden;
`

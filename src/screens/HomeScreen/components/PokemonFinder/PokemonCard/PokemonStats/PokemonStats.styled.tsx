import styled from 'styled-components/native'

import { BodyText } from '@components/Typography/BodyText/BodyText'

export const StyledStatsWrapper = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`

export const StyledStat = styled.View`
	width: 48%;
	height: 30px;
	flex-direction: row;
	justify-content: space-between;
`

export const StyledStatName = styled(BodyText)`
	text-transform: capitalize
	font-weight: 600;
`

import styled from 'styled-components/native'

import { Heading } from '@components/Typography/Heading/Heading'

export const StyledPokemonCard = styled.View`
	padding: 20px;
	height: 550px;
	justify-content: space-between;
	align-items: center;
`

export const StyledPokemonName = styled(Heading)`
	text-transform: capitalize;
	color: ${({ theme }) => theme.palette.text};
`

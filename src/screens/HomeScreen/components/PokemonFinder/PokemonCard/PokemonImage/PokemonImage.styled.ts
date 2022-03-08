import styled from 'styled-components/native'

export const StyledImageWrapper = styled.View`
	width: 200px;
	height: 200px;
	background: ${({ theme }) => theme.palette.accent};
	border-radius: 150px;
	justify-content: center;
	align-items: center;
`

export const StyledImage = styled.Image`
	bottom: -40px;
	position: absolute;
	width: 250px;
	height: 250px;
	align-self: center;
`

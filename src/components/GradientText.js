import styled from 'styled-components'
import { theme } from '../styles/theme'

export const GradientText = styled.h1`
	font-family: 'Roboto', sans-serif;
	font-size: ${theme.text.fontSize.large};
	font-weight: bold;
	color: ${theme.colors.offwhite};
	margin: 5px 0;
	text-align: left;
	width: 100%;
	text-transform: lowercase;
	background: -webkit-linear-gradient(0deg,
		${props => props.active ?
		theme.colors.pink :
		theme.colors.lightGrey},
		${props => props.active ?
		theme.colors.lime :
		theme.colors.void
	} 60%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-transition: background 1s;
	background-size: 100%;
	background-position: left;
	&:first-child {
		margin: 0 0 50px;
	}

	&:hover {
		cursor: pointer;
		background-size: 170%;
		background-position: right;
	}
`
import styled from 'styled-components'

export const SectionWrapper = styled.section`
	display: grid;
	grid-template-columns: 65% 35%;
	height: 100vh;
	
	@media(max-width: 768px) {
		grid-template-columns: 0% 100%;	
		padding: 0 20px;
	}
`

export const Menu = styled.div`
	height: 500px;
	margin: auto 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media(max-width: 768px) {
		height: unset;
		margin-bottom: 0;
	}
`
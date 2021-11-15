import styled from 'styled-components'

export const SectionWrapper = styled.section`
	display: grid;
	grid-template-columns: 60% 40%;
	height: 100vh;
	
	@media(max-width: 768px) {
		grid-template-columns: 0% 100%;	
		padding: 0 20px;
	}
`

export const Menu = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
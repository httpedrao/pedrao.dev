import { GradientText } from './GradientText'
import { Menu } from './Wrapper'
import { useRouter } from 'next/router'

function Navigation() {

	const router = useRouter()

	function handleClick(event, href) {
		event.preventDefault()
		router.push(href)
	}

	return (
		<Menu>
			<GradientText onClick={e => handleClick(e, '/')} active>pedro who?</GradientText>
			<GradientText onClick={e => handleClick(e, 'writing')}>writing</GradientText>
			<GradientText onClick={e => handleClick(e, 'photos')}>photos</GradientText>
			<GradientText onClick={e => handleClick(e, 'say-hello')}>say hello</GradientText>
		</Menu>
	)
}

export default Navigation



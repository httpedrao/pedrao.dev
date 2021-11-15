import { useEffect, useState } from 'react'

import { GradientText } from './GradientText'
import { Menu } from './Wrapper'
import { useRouter } from 'next/router'

function Navigation() {
	const [activeRoute, setActiveRoute] = useState('/')
	const router = useRouter()

	function handleClick(href) {
		router.push(href)
	}

	const MENU_OPTIONS = [
		{
			label: 'pedro who?',
			path: '/'
		},
		{
			label: 'writing',
			path: 'writing'
		},
		{
			label: 'photos',
			path: 'photos'
		},
		{
			label: 'say hello',
			path: 'say-hello'
		},
	]

	useEffect(() => {
		let path = router.pathname == '/' ? router.pathname : router.pathname.substring(1)
		setActiveRoute(path)
	}, [router])
	return (
		<Menu>
			{MENU_OPTIONS.map(({ label, path }) =>
				<GradientText
					key={path}
					onClick={() => handleClick(path)}
					active={activeRoute == path}
				>
					{label}
				</GradientText>
			)}
		</Menu >
	)
}

export default Navigation



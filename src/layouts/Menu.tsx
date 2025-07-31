import { Link } from '@tanstack/react-router'
import menuData from '@data/menus/main'

const MainMenu = () => {
	return (
		<ul>
			{menuData.map((item) => (
				<li key={item.id} className="">
					<Link to={`/${item.url}` as any}>{item.text}</Link>
				</li>
			))}
		</ul>
	)
}

export default MainMenu

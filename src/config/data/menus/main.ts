import type { RoutesProps } from '@/types/interfaces'

const main: RoutesProps[] = [
	{
		id: 1,
		url: '/',
		text: 'Home',
		orderMenu: 1,
	},
	{
		id: 2,
		url: 'person/list',
		text: 'List',
		orderMenu: 2,
	},
]

export default main

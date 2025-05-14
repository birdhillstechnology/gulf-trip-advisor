import { NavItemType } from '@/components/Navigation/NavigationItem'
import { Route } from '@/routers/types'
import _ from 'lodash'

const randomId = _.uniqueId

const DestinationsSubItems: NavItemType[] = [
	{
		id: randomId(),
		href: '/' as Route,
		name: 'UAE',
	},

	{
		id: randomId(),
		href: '/' as Route,
		name: 'Saudi Arabia',
	},

	{
		id: randomId(),
		href: '/',
		name: 'Qatar',
	},

	{
		id: randomId(),
		href: '/' as Route,
		name: 'Oman',
	},

	{
		id: randomId(),
		href: '/',
		name: 'Bahrain',
	},

	{
		id: randomId(),
		href: '/',
		name: 'Kuwait',
	},
]

export const NAVIGATION_DEMO_2: NavItemType[] = [
	{
		id: randomId(),
		href: '/',
		name: 'Home',
		type: 'none',
	},
	{
		id: randomId(),
		href: '/blogs' as Route,
		name: 'Blogs',
		type: 'none',
	},

	{
		id: randomId(),
		href: '/',
		name: 'Tours',
		type: 'none',
	},
	{
		id: randomId(),
		href: '/',
		name: 'Travel Tips',
		type: 'none',
	},
	{
		id: randomId(),
		href: '/search',
		name: 'Destinations',
		type: 'dropdown',
		children: DestinationsSubItems,
	},
]

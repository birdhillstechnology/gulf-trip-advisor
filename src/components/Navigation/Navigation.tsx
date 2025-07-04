import { NAVIGATION_DEMO_2 } from '@/data/navigation'
import { FC } from 'react'
import NavigationItem from './NavigationItem'

interface Props {
	className?: string
}

const Navigation: FC<Props> = ({ className = 'flex' }) => {
	return (
		<ul className={`nc-Navigation items-center ${className}`}>
			{NAVIGATION_DEMO_2.map((item) => (
				<NavigationItem key={item.id} menuItem={item} />
			))}
		</ul>
	)
}

export default Navigation

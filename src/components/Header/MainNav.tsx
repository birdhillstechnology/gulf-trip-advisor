import Logo from '@/components/Logo/Logo'
import MenuBar from '@/components/MenuBar/MenuBar'
import Navigation from '@/components/Navigation/Navigation'
import SwitchDarkMode from '@/components/SwitchDarkMode/SwitchDarkMode'
import { FC } from 'react'
import Button from '../Button/Button'
import SearchModal from './SearchModal'

export interface MainNav1Props {}

const MainNav: FC<MainNav1Props> = ({}) => {
	return (
		<div className="nc-MainNav1 relative z-10 bg-white dark:bg-slate-900">
			<div className="container">
				<div className="flex h-20 items-center justify-between py-5">
					<div className="flex flex-1 items-center lg:hidden">
						<MenuBar />
					</div>

					<div className="flex flex-1 items-center justify-center space-x-4 sm:space-x-10 lg:justify-start 2xl:space-x-14 rtl:space-x-reverse">
						<Logo />
						<Navigation className="hidden lg:flex" />
					</div>

					<div className="flex flex-1 items-center justify-end space-x-1 text-neutral-700 dark:text-neutral-100 rtl:space-x-reverse">
						<div className="hidden items-center lg:flex">
							<SwitchDarkMode />
							<SearchModal />
							<div className="px-1"></div>
							<Button
								sizeClass="py-3 px-4 sm:px-6"
								href="/login"
								pattern="primary"
							>
								Login
							</Button>
						</div>
						<div className="flex items-center lg:hidden">
							<SwitchDarkMode />
							<SearchModal />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainNav

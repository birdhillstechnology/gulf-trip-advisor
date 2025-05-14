import SingleHeader from './SingleHeader'

const PageSingleTemp4Sidebar = ({}) => {
	return (
		<>
			<div className="absolute inset-x-0 top-0 h-[480px] bg-neutral-900 dark:bg-black/30 md:h-[600px] lg:h-[700px] xl:h-[95vh]"></div>

			<header className="container relative z-10 rounded-xl pt-10 lg:pt-16">
				<SingleHeader />
			</header>
		</>
	)
}

export default PageSingleTemp4Sidebar

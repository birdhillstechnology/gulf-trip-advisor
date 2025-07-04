import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import NcImage from '@/components/NcImage/NcImage'
import PostMeta2 from '@/components/PostMeta2/PostMeta2'
import { DEMO_CATEGORIES } from '@/data/taxonomies'
import { FC } from 'react'
import SingleMetaAction from './SingleMetaAction'
import SingleTitle from './SingleTitle'

export interface SingleHeader4Props {
	hiddenDesc?: boolean
	className?: string
}

const SingleHeader: FC<SingleHeader4Props> = ({
	hiddenDesc = false,
	className = '',
}) => {
	return (
		<>
			<div className={`nc-SingleHeader4 ${className}`}>
				<div className="dark mx-auto max-w-5xl space-y-5">
					<CategoryBadgeList
						itemClass="!px-3"
						categories={[DEMO_CATEGORIES[1]]}
					/>
					<SingleTitle
						mainClass="text-neutral-900 font-bold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl 2xl:text-6xl dark:text-neutral-100"
						title={'Trending web & landing page designs in 2023'}
					/>
					{!hiddenDesc && (
						<span className="block pb-1 text-base text-neutral-500 dark:text-neutral-400 md:text-lg">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Perspiciatis tempora obcaecati error ipsum voluptatibus sed
							adipisci ut maiores nesciunt quam.
						</span>
					)}
				</div>

				{/* FEATURED IMAGE */}
				<NcImage
					alt="post"
					containerClassName="my-10 relative"
					className="w-full rounded-lg object-cover shadow-xl"
					src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg"
					width={1260}
					height={750}
					sizes="(max-width: 1024px) 100vw, 1280px"
				/>

				<div className="space-y-10">
					<div className="flex flex-col justify-between space-y-5 sm:flex-row sm:items-end sm:space-x-5 sm:space-y-0 rtl:space-x-reverse">
						<PostMeta2
							size="large"
							className="flex-shrink-0 leading-none"
							hiddenCategories
							avatarRounded="rounded-full shadow-inner"
						/>
						<SingleMetaAction />
					</div>
					<div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
				</div>
			</div>
		</>
	)
}

export default SingleHeader

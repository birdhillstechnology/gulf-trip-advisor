'use client'

import NcBookmark from '@/components/NcBookmark/NcBookmark'
import NcDropDown from '@/components/NcDropDown/NcDropDown'
import PostActionDropdown from '@/components/PostActionDropdown/PostActionDropdown'
import PostCardLikeAndComment from '@/components/PostCardLikeAndComment/PostCardLikeAndComment'
import { SOCIALS_DATA } from '@/components/SocialsShare/SocialsShare'
import { FC } from 'react'

export interface SingleMetaAction2Props {
	className?: string
}

const SingleMetaAction: FC<SingleMetaAction2Props> = ({ className = '' }) => {
	return (
		<div className={`nc-SingleMetaAction2 ${className}`}>
			<div className="flex flex-row items-center space-x-2.5 rtl:space-x-reverse">
				<PostCardLikeAndComment
					itemClass="px-4 h-9 text-sm"
					hiddenCommentOnMobile
					useOnSinglePage
					className="!space-x-2.5 rtl:!space-x-reverse"
				/>
				<div className="px-1">
					<div className="h-6 border-s border-neutral-200 dark:border-neutral-700" />
				</div>

				<NcBookmark containerClassName="h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200" />
				<NcDropDown
					className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
					renderTrigger={() => (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
							/>
						</svg>
					)}
					onClick={() => {}}
					data={SOCIALS_DATA}
				/>
				<PostActionDropdown
					containerClassName="h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
					iconClass="h-5 w-5"
				/>
			</div>
		</div>
	)
}

export default SingleMetaAction

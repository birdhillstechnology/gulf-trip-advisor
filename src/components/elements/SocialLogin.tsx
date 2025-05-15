'use client'
import Image from 'next/image';
import facebookSvg from '../../images/facebook.svg';
import googleSvg from '../../images/google.svg';

const loginSocials = [
	{
		name: 'Continue with Facebook',
		href: '#',
		icon: facebookSvg,
	},
	{
		name: 'Continue with Google',
		href: '#',
		icon: googleSvg,
	},
]

export default function SocialLogin() {
	return (
		<>
			{/* Socials links */}
			<div className="grid gap-3">
				{loginSocials.map((item, index) => (
					<a
						key={index}
						href={item.href}
						className="flex w-full transform rounded-lg bg-primary-50 px-4 py-3 transition-transform hover:translate-y-[-2px] dark:bg-neutral-800 sm:px-6"
					>
						<Image className="flex-shrink-0" src={item.icon} alt={item.name} />
						<h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
							{item.name}
						</h3>
					</a>
				))}
			</div>
		</>
	)
}

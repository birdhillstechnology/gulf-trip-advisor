'use client'
import { facebookIcon, googleIcon } from '@/images/icons'
import Image from 'next/image'
import Link from 'next/link'

const loginSocials = [
	{
		name: 'Continue with Facebook',
		href: '#' as const,
		icon: facebookIcon,
	},
	{
		name: 'Continue with Google',
		href: '#' as const,
		icon: googleIcon,
	},
]

export default function SocialLogin() {
	return (
		<>
			{/* Socials links */}
			<div className="grid gap-3">
				{loginSocials.map((item, index) => (
					<Link
						key={index}
						href={item.href}
						className="flex w-full transform rounded-lg bg-primary-50 px-4 py-3 transition-transform hover:translate-y-[-2px] dark:bg-neutral-800 sm:px-6"
					>
						<figure className="flex-shrink-0 text-3xl">{item.icon}</figure>
						<h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
							{item.name}
						</h3>
					</Link>
				))}
			</div>
		</>
	)
}

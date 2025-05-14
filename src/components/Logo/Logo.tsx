import logoImage from '@/images/gulf-trip-advisor-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
	return (
		<Link
			href="/"
			className="ttnc-logo inline-block flex-shrink-0 text-primary-6000"
		>
			<Image src={logoImage} alt="Gulf Trip Advisor logo" width={100} height={100} />
		</Link>
	)
}

export default Logo

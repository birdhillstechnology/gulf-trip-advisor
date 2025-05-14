import ButtonPrimary from '@/components/Button/ButtonPrimary'
import InputField from '@/components/elements/InputField'
import SocialLogin from '@/components/elements/SocialLogin'
import Heading2 from '@/components/Heading/Heading2'
import Input from '@/components/Input/Input'
import NcLink from '@/components/NcLink/NcLink'

const PageSignUp = ({}) => {
	return (
		<div className="py-10">
			<header className="- mx-auto mb-14 max-w-2xl text-center sm:mb-16 lg:mb-20">
				<Heading2>Sign up</Heading2>
				<span className="mt-2 block text-sm text-neutral-700 dark:text-neutral-200 sm:text-base">
					Welcome to our blog magazine Community
				</span>
			</header>

			<div className="mx-auto max-w-md space-y-6">
				<SocialLogin />

				{/* OR */}
				<div className="relative text-center">
					<span className="relative z-10 inline-block rounded-md bg-white px-4 text-sm font-medium dark:bg-neutral-900 dark:text-neutral-400">
						OR
					</span>
					<div className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform border border-neutral-100 dark:border-neutral-800"></div>
				</div>

				{/* FORM */}
				<form className="grid grid-cols-1 gap-6" action="#" method="post">
					<InputField id="fullName" label="Full Name"  />
					<label className="block">
						<span className="text-neutral-800 dark:text-neutral-200">
							Email address
						</span>
						<Input
							type="email"
							placeholder="example@example.com"
							className="mt-1"
						/>
					</label>
					<label className="block">
						<span className="flex items-center justify-between text-neutral-800 dark:text-neutral-200">
							Password
						</span>
						<Input type="password" className="mt-1" />
					</label>
					<ButtonPrimary type="submit">Continue</ButtonPrimary>
				</form>
				{/* ==== */}
				<span className="block text-center text-neutral-700 dark:text-neutral-300">
					Already have an account? {` `}
					<NcLink href="/login">Sign in</NcLink>
				</span>
			</div>
		</div>
	)
}

export default PageSignUp

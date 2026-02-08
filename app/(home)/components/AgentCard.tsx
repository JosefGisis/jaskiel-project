import Link from "next/link"

import { FiPhone, FiMail } from "react-icons/fi"

export default function AgentCard({
	text,
	url,
	name,
	phone,
	email,
}: {
	text: string
	url: string
	name: string
	phone: { label: string; href: string }
	email: { label: string; href: string }
}) {
	return (
		<div className="group max-w-[20rem] w-full bg-base-100 border border-accent/15 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30">
			{/* agent image */}
			<figure className="p-4 bg-black overflow-hidden">
				<img
					src={url}
					alt={`${name} - Real Estate Agent at The Jaskiel Team`}
					className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
				/>
			</figure>

			{/* agent name bar */}
			<div className="px-6 pt-5 pb-0">
				<h3 className="font-serif text-lg tracking-tight text-accent">
					{name}
				</h3>
				<div className="w-8 h-[2px] bg-primary mt-2 transition-all duration-500 group-hover:w-14" />
			</div>

			{/* agent content */}
			<div className="px-6 pt-4 pb-6">
				{/* agent bio text */}
				<p className="text-sm text-accent/70 leading-relaxed">{text}</p>

				{/* links */}
				<div className="flex flex-col gap-3 mt-5 text-sm">
					{/* phone link */}
					<div className="gap-3 flex items-center text-accent/60 hover:text-primary transition-colors duration-300">
						<FiPhone size={14} aria-hidden="true" />

						<Link
							href={phone.href}
							className="hover:underline underline-offset-2"
							aria-label={`Call ${name} at ${phone.label}`}>
							{phone.label}
						</Link>
					</div>

					{/* email link */}
					<div className="gap-3 flex items-center text-accent/60 hover:text-primary transition-colors duration-300">
						<FiMail size={14} aria-hidden="true" />

						<Link
							href={email.href}
							className="hover:underline underline-offset-2"
							aria-label={`Email ${name} at ${email.label}`}>
							{email.label}
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

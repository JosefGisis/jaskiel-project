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
		<div className="card max-w-[20rem] w-full shadow-lg border-[1px] border-secondary height-contain">
			{/* agent image */}
			<figure className="p-4 bg-black">
				<img
					src={url}
					alt={`${name} - Real Estate Agent at The Jaskiel Team`}
				/>
			</figure>

			{/* agent content */}
			<div className="card-body p-5">
				{/* agent bio text */}
				<p className="text-md text-left text-sm">{text}</p>

				{/* links */}
				<div className="flex flex-col gap-3 mt-4">
					{/* phone link */}
					<div className="gap-5 flex items-center">
						<FiPhone aria-hidden="true" />

						<Link
							href={phone.href}
							className="link link-hover"
							aria-label={`Call ${name} at ${phone.label}`}>
							{phone.label}
						</Link>
					</div>

					{/* email link */}
					<div className="gap-5 flex items-center">
						<FiMail aria-hidden="true" />

						<Link
							href={email.href}
							className="link link-hover"
							aria-label={`Email ${name} at ${email.label}`}>
							{email.label}
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

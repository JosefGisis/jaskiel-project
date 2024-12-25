import Link from "next/link"

import { FiPhone, FiMail } from "react-icons/fi"

export default function NewAgentCard({
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
		<div className="card max-w-[23rem] w-full shadow-lg border-[1px] border-secondary">
			{/* agent image */}
			<figure>
				<img src={url} />
			</figure>

			{/* agent content */}
			<div className="card-body">
				{/* agent bio text */}
				<p className="text-md text-justify">{text}</p>

				{/* links */}
				<div className="flex flex-col gap-3 mt-4">
					{/* phone link */}
					<div className="gap-5 flex items-center">
						<FiPhone />

						<Link href={phone.href} className="link link-hover">
							{phone.label}
						</Link>
					</div>

					{/* email link */}
					<div className="gap-5 flex items-center">
						<FiMail />

						<Link href={email.href} className="link link-hover">
							{email.label}
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

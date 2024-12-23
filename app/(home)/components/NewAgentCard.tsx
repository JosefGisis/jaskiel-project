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
		<div className="card max-w-[20rem] w-full shadow-lg">
			<figure>
				<img src={url} />
			</figure>
			<div className="card-body">
				<p className="text-md">{text}</p>
				<div style={{ display: "flex", gap: 18 }}>
					<FiPhone />
					<Link href={phone.href} color="#FFFFFF">
						{phone.label}
					</Link>
				</div>
				<div style={{ display: "flex", gap: 18 }}>
					<FiMail />

					<Link href={email.href} color="#FFFFFF">
						{email.label}
					</Link>
				</div>
			</div>
		</div>
	)
}

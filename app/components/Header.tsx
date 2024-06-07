import Link from "next/link"

export default function Header() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				marginBlock: 15,
			}}>
			<Link href="/">
				<img
					src="/logos/Jaskiel-logo-outlined.svg"
					style={{ height: 100 }}
				/>
			</Link>
		</div>
	)
}

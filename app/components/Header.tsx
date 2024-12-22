import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
	return (
		<div className="lg-container flex items-center justify-between py-4 md:py-7">
			<Link href="/" className="flex items-center gap-10">
				<img src="/logos/new-jaskiel-logo0.png" className="h-[60px]" />
				<img src="/logos/jaskiel banner1.png" className="h-[25px]" />
			</Link>

			<ThemeToggle />
		</div>
	)
}

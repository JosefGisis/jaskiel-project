import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
	return (
		<div className="bg-base-100 w-full flex">
			<div className="w-full max-w-xl mx-auto flex items-center justify-between p-4">
				<Link href="/" className="flex items-center gap-10">
					<img
						src="/logos/new-jaskiel-logo0.png"
						className="h-[75px]"
					/>
					<img
						src="/logos/jaskiel banner1.png"
						className="h-[30px]"
					/>
				</Link>

				<ThemeToggle />
			</div>
		</div>
	)
}

"use client"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { getTheme } from "../utils"

export default function Header() {
	const theme = document.documentElement.getAttribute("data-theme")

	return (
		<div className="bg-base-100 w-full flex">
			<div className="w-full max-w-screen-lg  mx-auto flex items-center justify-between p-4">
				<Link href="/" className="flex items-center gap-10">
					<img
						src={
							theme === "day"
								? "/logos/new-jaskiel-logo0.png"
								: "/logos/inverted logo.png"
						}
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

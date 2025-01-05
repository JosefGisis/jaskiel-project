"use client"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { useState } from "react"

export default function Header() {
	const [darkMode, setDarkMode] = useState(true)

	return (
		<div className="lg-container flex items-center justify-between py-4 md:py-7">
			<Link href="/" className="flex items-center gap-10">
				<img
					src={
						darkMode
							? "logos/inverted logo.png"
							: "logos/new-jaskiel-logo0.png"
					}
					className="w-[10%]"
				/>
				<img
					src={
						darkMode
							? "logos/inverted banner.png"
							: "/logos/jaskiel banner1.png"
					}
					className="w-[60%]"
				/>
			</Link>

			<ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
		</div>
	)
}

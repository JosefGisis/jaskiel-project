"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { FiMoon, FiSun } from "react-icons/fi"

export type Theme = "night" | "day"
export function isThemeType(str: string): str is Theme {
	return str === "night" || str === "day"
}

export const THEME_LOCAL_STORAGE_KEY = "theme"

// Gets TypeScript to recognize that the string is a Theme type
// Defaults to "night" if the string is not a valid Theme
function returnTheme(str: string | Theme): Theme {
	if (isThemeType(str)) {
		return str
	} else {
		return "night"
	}
}

export default function Header() {
	const [theme, _setTheme] = useState<Theme>("night")

	// Get the theme from local storage and set it in the document when the component mounts
	useEffect(() => {
		let theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || ""

		document.documentElement.setAttribute("data-theme", returnTheme(theme))
		_setTheme(returnTheme(theme))
	}, [])

	// Receives theme and sets it in local storage and document as well as local state.
	const setTheme = (theme: Theme) => {
		_setTheme(theme)
		localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme)
		document.documentElement.setAttribute("data-theme", theme)
	}

	return (
		<header
			className="w-full border-b border-accent/10 bg-base-100"
			role="banner">
			<div className="lg-container flex items-center justify-between py-4 sm:py-5 md:py-6 gap-5">
				<Link href="/" className="block">
					<img
						src={
							theme === "night"
								? "logos/jaskiel-header-gold.svg"
								: "logos/jaskiel-header-image.svg"
						}
						alt="The Jaskiel Team - Home"
						className="h-[60px] md:h-[72px] max-w-[95%] transition-opacity duration-300 hover:opacity-80"
					/>
				</Link>

				<button
					type="button"
					className="h-9 w-9 min-w-[36px] min-h-[44px] flex items-center justify-center rounded-full border border-accent/15 hover:border-primary/40 hover:text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
					onClick={() => setTheme(theme === "day" ? "night" : "day")}
					aria-label={
						theme === "day"
							? "Switch to dark theme"
							: "Switch to light theme"
					}>
					{theme === "day" ? (
						<FiSun className="h-4 w-4" aria-hidden="true" />
					) : (
						<FiMoon className="w-4 h-4" aria-hidden="true" />
					)}
				</button>
			</div>
		</header>
	)
}

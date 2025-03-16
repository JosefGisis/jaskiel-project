"use client"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { useEffect, useState } from "react"
// import {
// 	getThemeFromLocalStorage,
// 	setThemeInDocument,
// 	setThemeInLocalStorage,
// 	Theme,
// } from "../utils/theme"

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
		<div className="lg-container flex items-center justify-between py-4 md:py-7">
			<Link href="/" className="flex items-center gap-10">
				<img
					src={
						theme === "night"
							? "logos/jaskiel-header-gold.svg"
							: "logos/jaskiel-header-image.svg"
					}
					className="h-[80px] max-w-[80%]"
				/>
			</Link>

			<ThemeToggle theme={theme} setTheme={setTheme} />
		</div>
	)
}

"use client"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { useEffect, useState } from "react"
import {
	getThemeFromLocalStorage,
	setThemeInDocument,
	setThemeInLocalStorage,
	Theme,
} from "../utils/theme"

export default function Header() {
	const [theme, _setTheme] = useState<Theme>(getThemeFromLocalStorage())

	useEffect(() => {
		getThemeFromLocalStorage()
		setThemeInDocument(theme)
	}, [])

	const setTheme = (theme: Theme) => {
		_setTheme(theme)
		setThemeInLocalStorage(theme)
		setThemeInDocument(theme)
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

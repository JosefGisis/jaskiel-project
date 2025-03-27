"use client"

// Not used currently

import type { Theme } from "./Header"
import { FiSun, FiMoon } from "react-icons/fi"

export default function ThemeToggle({
	theme,
	setTheme,
}: {
	theme: Theme
	setTheme: (theme: Theme) => void
}) {
	return (
		<div
			className="h-8 w-8 max-w-[10%]"
			onClick={() => setTheme(theme === "day" ? "night" : "day")}>
			{theme === "day" ? (
				<FiSun className="h-8 w-8 max-w-[100%]" />
			) : (
				<FiMoon className="h-8 w-8 max-w-[100%]" />
			)}
		</div>
	)
}

export type Theme = "night" | "day"

export function getTheme() {
	return document.documentElement.getAttribute("data-theme")
}

export function toggleTheme(): void {
	const prevTheme = getTheme()
	document.documentElement.setAttribute(
		"data-theme",
		prevTheme === "night" || !prevTheme ? "day" : "night"
	)
}

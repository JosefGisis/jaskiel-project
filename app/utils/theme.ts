// export const THEME_LOCAL_STORAGE_KEY = "theme"

// export type Theme = "night" | "day"
// export function isThemeType(str: string): str is Theme {
// 	return str === "night" || str === "day"
// }

// // These utility functions are used to get and set the theme in local storage
// export function getThemeFromLocalStorage(): Theme {
// 	const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || ""

// 	if (isThemeType(theme)) {
// 		return theme
// 	} else {
// 		return "night"
// 	}
// }
// export function setThemeInLocalStorage(theme: Theme) {
// 	localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme)
// }

// // These utility functions are used to get and set the theme in the document. The document contains the data-theme attribute which is used to set the theme.
// export const getThemeFromDocument = () => {
// 	const theme = document.documentElement.getAttribute("data-theme") || ""

// 	if (isThemeType(theme)) {
// 		return theme
// 	} else {
// 		return "night"
// 	}
// }
// export const setThemeInDocument = (theme: Theme) => {
// 	document.documentElement.setAttribute("data-theme", theme)
// }

export {}

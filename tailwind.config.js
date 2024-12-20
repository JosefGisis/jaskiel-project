const PRIMARY_COLOR = "#e4c07e"
const SECONDARY_COLOR = "#2f4f4f"
const NEUTRAL_COLOR = "#e1dddd"
const INFO_COLOR = "#0000ff"
const SUCCESS_COLOR = "#00ff00"
const WARNING_COLOR = "#00ff00"
const ERROR_COLOR = "#ff0000"

module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	plugins: [require("daisyui")],
	theme: {},
	daisyui: {
		themes: [
			{
				day: {
					primary: PRIMARY_COLOR,

					secondary: SECONDARY_COLOR,

					accent: "#111827",

					neutral: NEUTRAL_COLOR,

					"base-100": "#ffffff",

					info: INFO_COLOR,

					success: SUCCESS_COLOR,

					warning: WARNING_COLOR,

					error: ERROR_COLOR,
				},
			},
			{
				night: {
					primary: PRIMARY_COLOR,

					secondary: SECONDARY_COLOR,

					accent: "#ffffff",

					neutral: NEUTRAL_COLOR,

					"base-100": "#000000",

					info: INFO_COLOR,

					success: SUCCESS_COLOR,

					warning: WARNING_COLOR,

					error: ERROR_COLOR,
				},
			},
		],
	},
	darkMode: ["selector", '[data-theme="night"]'],
}

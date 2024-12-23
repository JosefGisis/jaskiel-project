const PRIMARY_COLOR = "#e4c07e"
const NEUTRAL_COLOR = "#e6d9d3"
const SECONDARY_COLOR = "#e1dddd"
const INFO_COLOR = "#0000ff"
const SUCCESS_COLOR = "#00ff00"
const WARNING_COLOR = "#00ff00"
const ERROR_COLOR = "#ff0000"

module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				day: {
					primary: PRIMARY_COLOR,

					secondary: SECONDARY_COLOR,

					accent: "#000000",

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

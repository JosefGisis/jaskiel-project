const PRIMARY_COLOR = "#c9a54e"
const NEUTRAL_COLOR = "#ece6df"
const SECONDARY_COLOR = "#e1dddd"
const INFO_COLOR = "#0000ff"
const SUCCESS_COLOR = "#00ff00"
const WARNING_COLOR = "#00ff00"
const ERROR_COLOR = "#ff0000"

module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	plugins: [require("daisyui")],
	theme: {
		extend: {
			fontFamily: {
				serif: [
					"var(--font-playfair)",
					"Playfair Display",
					"Georgia",
					"serif",
				],
				sans: [
					"var(--font-dm-sans)",
					"DM Sans",
					"system-ui",
					"sans-serif",
				],
			},
			letterSpacing: {
				"widest-xl": "0.15em",
			},
		},
	},
	daisyui: {
		themes: [
			{
				night: {
					primary: PRIMARY_COLOR,

					secondary: SECONDARY_COLOR,

					accent: "#f5f0eb",

					neutral: NEUTRAL_COLOR,

					"base-100": "#0a0a0a",

					info: INFO_COLOR,

					success: SUCCESS_COLOR,

					warning: WARNING_COLOR,

					error: ERROR_COLOR,
				},
			},
			{
				day: {
					primary: PRIMARY_COLOR,

					secondary: SECONDARY_COLOR,

					accent: "#1a1a1a",

					neutral: NEUTRAL_COLOR,

					"base-100": "#faf8f5",

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

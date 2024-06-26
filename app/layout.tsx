import "../styles/global.css"

import type { Metadata } from "next"

import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./materialUI"

// Vercel Analytics
import { Analytics } from "@vercel/analytics/react"

// This import is required to import styles from survey-core.
import "survey-core/defaultV2.min.css"

import Footer from "./components/Footer"
// Scroll to top button.
import ScrollToTop from "./components/ScrollToTop"

export const metadata: Metadata = {
	title: "The Jaskiel Team",
	description:
		"The Jaskiel Team is your premier real estate agency in New Jersey. We specialize in Jackson, Toms River, Lakewood, Howell, and all of Ocean County. Buy or sell your home with us!",
	authors: {
		name: "Josef Gisis",
	},
	keywords: [
		"The Jaskiel Team",
		"Real Estate",
		"Real Estate Agency",
		"Jackson New Jersey Real Estate",
		"Toms River New Jersey Real Estate",
		"Lakewood New Jersey Real Estate",
		"Howell New Jersey Real Estate",
		"Ocean County Real Estate",
		"Buy Home in New Jersey",
		"Sell Home in New Jersey",
		"New Jersey Real Estate",
		"Jaskiel",
		"Baila Jaskiel",
		"Jennifer Gisis",
		"Esther Gisis",
		"Malky Zaks",
		"Malky Sternbuch",
		"Dina Inzelbuch",
		"Dina Cohen",
		"Keller Williams Realty",
	],
	robots: "index",
	icons: ["favicons/Jaskiel-favicon-128.svg"],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				style={{
					display: "flex",
					flexDirection: "column",
					margin: 0,
				}}>
				{/* vercel analytics comp */}
				<Analytics />

				<ThemeProvider theme={theme}>
					<ScrollToTop />
					<main style={{ flex: 1, minHeight: "62vh" }}>
						{children}
					</main>

					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}

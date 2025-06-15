import "../styles/global.css"

import type { Metadata } from "next"

// Vercel Analytics
import { Analytics } from "@vercel/analytics/react"

// This import is required to import styles from survey-core.
import "survey-core/defaultV2.min.css"

import Footer from "./components/Footer"
// Scroll to top button.
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"

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
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				{/* vercel analytics comp */}
				<Analytics />

				{/* <ScrollToTop /> */}

				<div className="flex flex-col justify-between items-center min-h-screen">
					<Header />

					<main className="flex-1 w-full">{children}</main>

					<Footer />
				</div>
			</body>
		</html>
	)
}

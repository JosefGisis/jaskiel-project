import "../styles/global.css"

import type { Metadata } from "next"

import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./materialUI"

// This import is required to import styles from survey-core.
import "survey-core/defaultV2.min.css"

import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata: Metadata = {
	title: "The Jaskiel Team",
	description: "",
	authors: {
		name: "Josef Gisis",
	},
	keywords: [],
	robots: "index",
	icons: [],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<ThemeProvider theme={theme}>
				<body style={{ display: "flex", flexDirection: "column" }}>
					<Header />

					<main style={{ flex: 1, minHeight: "62vh" }}>
						{children}
					</main>

					<Footer />
				</body>
			</ThemeProvider>
		</html>
	)
}

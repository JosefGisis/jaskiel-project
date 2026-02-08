import "../styles/global.css"

import type { Metadata } from "next"

// Vercel Analytics
import { Analytics } from "@vercel/analytics/react"

// This import is required to import styles from survey-core.
import "survey-core/defaultV2.min.css"

import Footer from "./components/Footer"
import Header from "./components/Header"

const siteUrl = "https://www.thejaskielteam.com"

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default:
			"The Jaskiel Team | Premier Real Estate in Jackson, Lakewood & Ocean County NJ",
		template: "%s | The Jaskiel Team",
	},
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
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: siteUrl,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		siteName: "The Jaskiel Team",
		title: "The Jaskiel Team | Premier Real Estate in Jackson, Lakewood & Ocean County NJ",
		description:
			"Award-winning real estate team serving Lakewood, Jackson, Howell, Toms River, and Ocean County, NJ. Over 12 years of experience and $59M+ sold in 2024.",
		images: [
			{
				url: "/logos/jaskiel-badge.png",
				width: 400,
				height: 400,
				alt: "The Jaskiel Team logo",
			},
		],
	},
	twitter: {
		card: "summary",
		title: "The Jaskiel Team | Premier Real Estate in Jackson, Lakewood & Ocean County NJ",
		description:
			"Award-winning real estate team serving Lakewood, Jackson, Howell, Toms River, and Ocean County, NJ.",
		images: ["/logos/jaskiel-badge.png"],
	},
}

// JSON-LD structured data for local business / real estate agent
function JsonLd() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "RealEstateAgent",
		name: "The Jaskiel Team",
		description:
			"Award-winning real estate team serving Lakewood, Jackson, Howell, Toms River, and Ocean County, NJ. Over 12 years of industry experience.",
		url: siteUrl,
		logo: `${siteUrl}/logos/jaskiel-badge.png`,
		image: `${siteUrl}/logos/jaskiel-badge.png`,
		telephone: "+1-848-223-2295",
		email: "bjaskiel@gmail.com",
		address: {
			"@type": "PostalAddress",
			streetAddress: "353 N County Line Rd",
			addressLocality: "Jackson Township",
			addressRegion: "NJ",
			postalCode: "08527",
			addressCountry: "US",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 40.13925,
			longitude: -74.3017685,
		},
		areaServed: [
			{
				"@type": "City",
				name: "Jackson",
				containedInPlace: { "@type": "State", name: "New Jersey" },
			},
			{
				"@type": "City",
				name: "Lakewood",
				containedInPlace: { "@type": "State", name: "New Jersey" },
			},
			{
				"@type": "City",
				name: "Toms River",
				containedInPlace: { "@type": "State", name: "New Jersey" },
			},
			{
				"@type": "City",
				name: "Howell",
				containedInPlace: { "@type": "State", name: "New Jersey" },
			},
			{ "@type": "AdministrativeArea", name: "Ocean County, NJ" },
		],
		parentOrganization: {
			"@type": "Organization",
			name: "Keller Williams Realty Monmouth/Ocean",
			url: "https://www.kw.com/",
		},
		openingHoursSpecification: {
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "09:00",
			closes: "18:00",
		},
		sameAs: ["https://www.zillow.com/profile/bjaskiel"],
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "5",
			reviewCount: "100",
			bestRating: "5",
		},
	}

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	)
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<JsonLd />
				{/* vercel analytics comp */}
				<Analytics />

				{/* Skip to main content link for keyboard/screen reader users */}
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:ring-2 focus:ring-primary">
					Skip to main content
				</a>

				<div className="flex flex-col justify-between items-center min-h-screen">
					<Header />

					<main
						id="main-content"
						className="flex-1 w-full"
						tabIndex={-1}>
						{children}
					</main>

					<Footer />
				</div>
			</body>
		</html>
	)
}

import Link from "next/link"

import type { LinkType } from "../types"

export default function Footer() {
	const { phone, email, address } = footerLinks
	// return (
	// 	<div
	// 		id="footer"
	// 		style={{
	// 			backgroundColor: primary,
	// 			color: "white",
	// 		}}>
	// 		<Container maxWidth="lg">
	// 			{/* responsive flex is not currently used */}
	// 			<Box
	// 				sx={{
	// 					display: "flex",
	// 					gap: "40px",
	// 					flexDirection: { xs: "column", md: "row" },
	// 					justifyContent: "space-between",
	// 					mt: "60px",
	// 				}}>
	// 				<div
	// 					id="business-links"
	// 					style={{
	// 						display: "flex",
	// 						flexDirection: "column",
	// 						gap: 15,
	// 					}}>
	// 					{/* logo and home page links */}

	// 					<div style={{ display: "flex", gap: "8px" }}>
	// 						<div>
	// 							<Link href="/">
	// 								<img
	// 									src="logos/Jaskiel-logo-inverted-org.svg"
	// 									height="100px"
	// 								/>
	// 							</Link>
	// 						</div>
	// 						<div
	// 							style={{
	// 								width: "1px",
	// 								height: "100px",
	// 								backgroundColor: "white",
	// 								marginInline: "10px",
	// 							}}
	// 						/>
	// 						<a href="https://www.kw.com/">
	// 							<img
	// 								src="logos/KWLogo-white-transparent.svg"
	// 								height="100px"
	// 							/>
	// 						</a>
	// 					</div>
	// 					<Typography
	// 						fontSize="0.8rem"
	// 						variant="body2"
	// 						marginBottom="1.5rem">
	// 						The Jaskiel Team is a subdivision of Keller Williams
	// 						Realty
	// 					</Typography>

	// 					{/* contact information links */}
	// 					<div style={{ display: "flex", gap: 10 }}>
	// 						<LocalPhoneIcon />
	// 						<Typography id="phone" className="footer-link">
	// 							<a href={phone.href}>{phone.label}</a>
	// 						</Typography>
	// 					</div>

	// 					<div style={{ display: "flex", gap: 10 }}>
	// 						<EmailIcon />
	// 						<Typography id="email" className="footer-link">
	// 							<a className="footer-link" href={email.href}>
	// 								{email.label}
	// 							</a>
	// 						</Typography>
	// 					</div>

	// 					<div style={{ display: "flex", gap: 10 }}>
	// 						<PlaceIcon />
	// 						<Typography id="address" className="footer-item">
	// 							<a className="footer-link" href={address.href}>
	// 								{address.label}
	// 							</a>
	// 						</Typography>
	// 					</div>
	// 				</div>
	// 			</Box>

	// 			<Typography
	// 				variant="body1"
	// 				sx={{ my: "60px", textAlign: "center" }}>
	// 				©️ 2024 The Jaskiel Team - Jackson, NJ 08527
	// 			</Typography>
	// 		</Container>
	// 	</div>
	// )
}

export const footerLinks: {
	phone: LinkType
	email: LinkType
	address: LinkType
	otherLinks: LinkType[]
} = {
	phone: { label: "848-223-2295", href: "tel:8482232295" },
	email: { label: "bjaskiel@gmail.com", href: "mailto:bjaskiel@gmail.com" },
	address: {
		label: "353 N County Line Rd, Jackson Township, NJ 08527",
		href: "https://www.google.com/maps/place/Keller+Williams+Monmouth%2FOcean+-+John+Meeker/@40.13925,-74.3017685,17z/data=!3m1!4b1!4m6!3m5!1s0x89c17f46cf372a79:0xffc481e5d2923c3c!8m2!3d40.13925!4d-74.3017685!16s%2Fg%2F11g1ppy0vt?entry=ttu",
	},
	otherLinks: [
		{ label: "Zillow", href: "https://www.zillow.com/profile/bjaskiel" },
	],
}

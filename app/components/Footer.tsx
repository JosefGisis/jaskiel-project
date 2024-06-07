import { Box, Typography, Container } from "@mui/material"
import PlaceIcon from "@mui/icons-material/Place"
import EmailIcon from "@mui/icons-material/Email"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import { colorTheme } from "../../styles/colorTheme"
import Link from "next/link"
import { footerLinks } from "../content"

export default function Footer() {
	const { phone, email, address } = footerLinks
	const { primary } = colorTheme
	return (
		<div
			id="footer"
			style={{
				backgroundColor: primary,
				color: "white",
			}}>
			<Container maxWidth="lg">
				{/* responsive flex is not currently used */}
				<Box
					sx={{
						display: "flex",
						gap: "40px",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "space-between",
						mt: "60px",
					}}>
					<div
						id="business-links"
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 15,
						}}>
						{/* logo and home page links */}

						<div style={{ display: "flex", gap: "8px" }}>
							<div>
								<Link href="/">
									<img
										src="logos/Jaskiel-logo-inverted.svg"
										height="100px"
									/>
								</Link>
							</div>
							<div
								style={{
									width: "1px",
									height: "100px",
									backgroundColor: "white",
									marginInline: "10px",
								}}
							/>
							<a href="https://www.kw.com/">
								<img
									src="logos/KWLogo-white-transparent.svg"
									height="100px"
								/>
							</a>
						</div>
						<Typography
							fontSize="0.8rem"
							variant="body2"
							marginBottom="1.5rem">
							The Jaskiel Team is a subdivision of Keller Williams
							Realty
						</Typography>

						{/* contact information links */}
						<div style={{ display: "flex", gap: 10 }}>
							<LocalPhoneIcon />
							<Typography id="phone" className="footer-link">
								<a href={phone.href}>{phone.label}</a>
							</Typography>
						</div>

						<div style={{ display: "flex", gap: 10 }}>
							<EmailIcon />
							<Typography id="email" className="footer-link">
								<a className="footer-link" href={email.href}>
									{email.label}
								</a>
							</Typography>
						</div>

						<div style={{ display: "flex", gap: 10 }}>
							<PlaceIcon />
							<Typography id="address" className="footer-item">
								<a className="footer-link" href={address.href}>
									{address.label}
								</a>
							</Typography>
						</div>

						{/* footer links */}
						{/* {footerLinks.map((link, index) => (
							<Link key={index} href={link.href}>
								<Typography
									variant="body2"
									className="footer-link">
									{link.label}
								</Typography>
							</Link>
						))} */}
					</div>

					{/* not currently used */}
					{/* agents link section */}
					{/* {agents.map((item, index) => (
						<Box
							key={index}
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "18px",
								alignItems: { xs: "center", md: "start" },
								textWrap: "nowrap",
							}}>
							<div
								style={{
									display: "flex",
									alignItems: "center",
								}}>
								<Typography variant="h6">
									{item.name}
								</Typography>
								{item.phone && <LocalPhoneIcon />}
								{item.email && <EmailIcon />}
							</div>

							{item.links.map((link, index) => (
								<a key={index} href={link.href}>
									<Typography
										style={{ textWrap: "nowrap" }}
										variant="body2"
										className="footer-link"
										width="fit-content">
										{link.label}
									</Typography>
								</a>
							))}
						</Box>
					))}
					*/}
				</Box>

				<Typography
					variant="body1"
					sx={{ my: "60px", textAlign: "center" }}>
					©️ 2024 The Jaskiel Team - Jackson, NJ 08527
				</Typography>
			</Container>
		</div>
	)
}

import { Box, Typography, Container } from "@mui/material"
import PlaceIcon from "@mui/icons-material/Place"
import EmailIcon from "@mui/icons-material/Email"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import { colorTheme } from "../../styles/colorTheme"
import Link from "next/link"
// import { agents } from "../content"

export default function Footer() {
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

						<Link href="/">
							<div style={{ display: "flex", gap: "8px" }}>
								<div>
									<img
										src="logos/jaskiel-logo-inverted.png"
										height="100px"
									/>
								</div>
								<div
									style={{
										width: "1px",
										height: "100px",
										backgroundColor: "white",
										marginInline: "10px",
									}}
								/>
								<img
									src="logos/KWLogo-white-transparent.png"
									height="100px"
								/>
							</div>
						</Link>
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
								<a href="tel:732-330-3038">(732)-330-3038</a>
							</Typography>
						</div>

						<div style={{ display: "flex", gap: 10 }}>
							<EmailIcon />
							<Typography id="email" className="footer-link">
								<a
									className="footer-link"
									href="mailto:iRepairr4u@gmail.com">
									iRepairr4u@gmail.com
								</a>
							</Typography>
						</div>

						<div style={{ display: "flex", gap: 10 }}>
							<PlaceIcon />
							<Typography id="address" className="footer-item">
								<a
									className="footer-link"
									href="https://www.google.com/maps/place/iRepair4U+LLC/@40.1038409,-74.2717807,17z/data=!3m1!4b1!4m6!3m5!1s0x89c179553fca4843:0x689de9999043f34b!8m2!3d40.1038368!4d-74.2692058!16s%2Fg%2F11vkkr95w1?entry=ttu">
									750 Green Valley rd., Jackson, NJ 08527
								</a>
							</Typography>
						</div>
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

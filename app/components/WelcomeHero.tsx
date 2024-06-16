import { Box, Button, Container, Typography } from "@mui/material"
import { welcome } from "../content"
import { colorTheme } from "../../styles/colorTheme"
import Link from "next/link"

const backgroundImage = "images/pexels-binyaminmellish-1396122.jpg"

export default function WelcomeHero() {
	const { primary } = colorTheme
	return (
		<div>
			{/* background image box */}
			<Box
				sx={{
					width: "100%",
					height: { xs: "800px", sm: "900px" },
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center center",
					color: "black",
					display: "flex",
					alignItems: "center",
					justifyContent: "start",
				}}>
				{/* gradient overlay. This becomes active on smaller screens for better text contrast */}
				<Box
					sx={{
						width: "100%",
						height: "100%",
						background: {
							xs: "rgba(255, 255, 255, 0.5)",
							md: "transparent",
						},
					}}>
					{/* linear gradient layer */}
					<div
						style={{
							width: "100%",
							height: "100%",
							background: `linear-gradient(to right, white, transparent)`,
						}}>
						{/* content container */}
						<Container
							maxWidth="lg"
							style={{
								width: "100%",
								height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "start",
							}}>
							{/* this container keeps header on left side of screen */}
							<div
								style={{
									maxWidth: "30rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "start",
									gap: "1.5rem",
								}}>
								<img
									src="logos/Jaskiel-logo-mod.svg"
									height="175px"
								/>

								<Typography variant="h3">
									{welcome.title}
								</Typography>

								<Typography variant="h6">
									{welcome.subtitle}
								</Typography>

								<Link href="/#contact-us">
									<Button
										variant="outlined"
										size="large"
										sx={{
											color: primary,
											borderColor: primary,
										}}>
										<Typography variant="h6">
											Contact Us
										</Typography>
									</Button>
								</Link>
							</div>
						</Container>
					</div>
				</Box>
			</Box>
		</div>
	)
}

import { Box, Button, Typography } from "@mui/material"
import { welcome } from "../content"

const backgroundImage = "images/pexels-binyaminmellish-1396122.jpg"

export default function WelcomeHero() {
	return (
		<div>
			<Box
				sx={{
					width: "100%",
					height: "500px",
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: "cover",
					backgroundPosition: "start start",
					color: "black",
					display: "flex",
					alignItems: "center",
					justifyContent: "start",
					// "& > *": {
					// 	// Apply text shadow for better visibility
					// 	textShadow: "0px 0px 3px #000",
					// },
				}}>
				<div
					style={{
						width: "100%",
						height: "100%",
						background: `linear-gradient(to right, white, transparent)`,
					}}>
					<div
						style={{
							width: "50%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<img
							src="logos/jaskiel-logo.png"
							alt="logo"
							height="150px"
						/>
						<Typography variant="h3">
							{welcome.title}
						</Typography>
						<Typography variant="h5">
							{welcome.subtitle}
						</Typography>
						<Button variant="contained">Contact Us</Button>
					</div>
				</div>
			</Box>
		</div>
	)
}

import { Box, Typography } from "@mui/material"

const BACKGROUND_IMAGE = "images/pexels-binyaminmellish-1396422.jpg"

export default function WelcomeHero() {
	return (
		<div>
			{/* welcome hero banner */}
			<Box
				sx={{
					width: "100%",
					height: "500px",
					backgroundImage: `url(${BACKGROUND_IMAGE})`,
					backgroundSize: "cover",
					color: "white",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					"& > *": {
						// Apply text shadow for better visibility
						textShadow: "0px 0px 3px #000",
					},
				}}>
				<div>
					<Typography variant="h3">
						Your Dream Home is Closer than You Think!
					</Typography>
				</div>
			</Box>
		</div>
	)
}

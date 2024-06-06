import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Typography,
	Avatar,
	Button,
	CardActionArea,
} from "@mui/material"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import { colorTheme } from "../../styles/colorTheme"

export default function AgentCard({
	text,
	image,
	name,
	href,
}: {
	text: string
	image: string
	name: string
	href: string
}) {
	const { secondary } = colorTheme
	return (
		<Card variant="outlined">
			<CardActionArea>
				{/* <CardHeader
				title={
					<Typography textAlign="center" variant="h4">
          {name}
					</Typography>
          }
          // avatar={
            // 	<Avatar
            // 		variant="square"
            // 		style={{ height: 100, width: 100 }}
            // 		src={image}
            // 		alt={name}>
            // 		J
            // 	</Avatar>
            // }
            /> */}
				<CardMedia
					height="350px"
					component="img"
					image={image}
					alt={name}
				/>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						gap: "0.5rem",
					}}>
					<Typography textAlign="center" variant="h4">
						{name}
					</Typography>
					<Typography variant="body1">{text}</Typography>
					<div style={{ display: "flex", justifyContent: "end" }}>
						<Button
							href={href}
							sx={{
								color: "black",
							}}
							variant="text">
							<ArrowRightAltIcon />
						</Button>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

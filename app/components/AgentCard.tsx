import { Card, CardMedia, CardContent, Typography, Link } from "@mui/material"
import { colorTheme } from "../../styles/colorTheme"
import EmailIcon from "@mui/icons-material/Email"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"

export default function AgentCard({
	text,
	url,
	name,
	phone,
	email,
}: {
	text: string
	url: string
	name: string
	phone: { label: string; href: string }
	email: { label: string; href: string }
}) {
	const { accent, primary, secondaryAccent } = colorTheme
	return (
		<Card variant="outlined" sx={{ background: primary, color: "white" }}>
			<CardMedia
				height="350px"
				component="img"
				image={url}
				alt={name}
				width="100%"
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					gap: "0.5rem",
					backgroundColor: primary,
				}}>
				<Typography
					fontStyle="oblique"
					textAlign="center"
					variant="h4"
					color={accent}>
					{name}
				</Typography>

				<Typography variant="body1">{text}</Typography>

				{/* contact links */}
				<div style={{ display: "flex", gap: 18 }}>
					<LocalPhoneIcon style={{ color: accent }} />
					<Link href={phone.href} color="#FFFFFF">
						{phone.label}
					</Link>
				</div>

				<div style={{ display: "flex", gap: 18 }}>
					<EmailIcon style={{ color: accent }} />
					<Link href={email.href} color="#FFFFFF">
						{email.label}
					</Link>
				</div>
			</CardContent>
		</Card>
	)
}

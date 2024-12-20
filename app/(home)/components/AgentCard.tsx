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
	// return (
	// 	<Card variant="outlined" sx={{ color: "white" }}>
	// 		<CardMedia
	// 			height="350px"
	// 			component="img"
	// 			image={url}
	// 			alt={name}
	// 			width="100%"
	// 		/>
	// 		<CardContent
	// 			sx={{
	// 				display: "flex",
	// 				flexDirection: "column",
	// 				justifyContent: "center",
	// 				gap: "0.5rem",
	// 				// backgroundColor: primary,
	// 			}}>
	// 			<Typography
	// 				fontStyle="oblique"
	// 				textAlign="center"
	// 				variant="h4"
	// 				// color={accent}
	// 			>
	// 				{name}
	// 			</Typography>
	// 			<Typography variant="subtitle1">{text}</Typography>
	// 			{/* contact links */}
	// 			<div style={{ display: "flex", gap: 18 }}>
	// 				<LocalPhoneIcon />
	// 				<Link href={phone.href} color="#FFFFFF">
	// 					{phone.label}
	// 				</Link>
	// 			</div>
	// 			<div style={{ display: "flex", gap: 18 }}>
	// 				<EmailIcon />
	// 				<Link href={email.href} color="#FFFFFF">
	// 					{email.label}
	// 				</Link>
	// 			</div>
	// 		</CardContent>
	// 	</Card>
	// )
}

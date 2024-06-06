import { Box, Container, Typography } from "@mui/material"
import { about } from "../content"

export default function AboutSection() {
	return (
		<section
			id="about-detailed"
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginBottom: "4rem",
				paddingBottom: "4rem",
			}}>
			<Container maxWidth="lg">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "3rem",
						}}>
						{about.map((item, index) => (
							<Box
								key={index}
								sx={{
									display: "flex",
									flexDirection: {
										xs: "column",
										md: "row",
									},
									gap: "3rem",
									order: 1,
								}}>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "1rem",
										alignItems: "center",
										order: 2,
									}}>
									<div
										style={{
											padding: "1rem",
											width: "100%",
											marginBottom: "1rem",
											background: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6) )`,
										}}>
										<Typography
											variant="h4"
											textAlign="center">
											{item?.title}
										</Typography>
									</div>

									<div style={{ paddingInline: 15 }}>
										<Typography variant="body1">
											{item?.text}
										</Typography>
									</div>
								</div>
								<Box
									sx={{
										order: {
											xs: 3,
											// alternate order of image and text on md screens
											md: index % 2 === 0 ? 3 : 1,
										},
									}}>
									<img
										src={item.image}
										width="460"
										height="307"
									/>
								</Box>
							</Box>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
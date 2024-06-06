import { Box, Container, Typography } from "@mui/material"
import { about } from "../content"
import { colorTheme } from "../../styles/colorTheme"

export default function AboutSection() {
	const { neutral, primary } = colorTheme
	return (
		<section>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				{/* card background color is determined by index */}
				{about.map((item, index) => (
					<Box
						key={index}
						sx={{
							width: "100%",
							background:
								(index + 1) % 2 === 0
									? "white"
									: (index + 1) % 3 === 0
										? primary
										: neutral,
							color: (index + 1) % 3 === 0 ? "white" : "black",
							paddingBlock: "70px",
						}}>
						{/* depending on screen width the image and text is displayed in different orders */}
						<Container
							maxWidth="lg"
							sx={{
								display: "flex",
								flexDirection: {
									xs: "column",
									md: "row",
								},
								justifyContent: {
									xs: "center",
									md: "space-between",
								},
								alignItems: "center",
								gap: "2rem",
							}}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									gap: "1rem",
									alignItems: "center",
									justifyContent: "center",
									order: 2,
									maxWidth: { xs: "550px", md: "700px" },
								}}>
								<div
									style={{
										width: "100%",
										marginBottom: "",
									}}>
									<Typography
										variant="h4"
										marginTop="0px"
										textAlign="center">
										{item?.title}
									</Typography>
								</div>

								<div style={{ paddingInline: 15 }}>
									<Typography variant="subtitle1">
										{item?.text}
									</Typography>
								</div>
							</Box>

							<Box
								sx={{
									order: {
										xs: 3,
										// alternate order of image and text on md screens
										md: index % 2 === 0 ? 3 : 1,
									},
								}}>
								<img src={item.image} height="350" />
							</Box>
						</Container>
					</Box>
				))}
			</div>
		</section>
	)
}

import { Container, Typography } from "@mui/material"
import { colorTheme } from "../../styles/colorTheme"
import { testimonials } from "../content"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

export default function Testimonials() {
	const { neutral } = colorTheme
	return (
		<section style={{ backgroundColor: neutral, paddingBlock: "3rem" }}>
			<Container maxWidth="lg">
				<Typography
					variant="h3"
					textAlign="center"
					gutterBottom
					marginBottom="1.5rem">
					What Our Clients Say
				</Typography>

				{/* responsive grid */}
				<Grid2
					container
					rowSpacing={5}
					columnSpacing={4}
					justifyItems="center">
					{testimonials.map((testimonial, index) => (
						<Grid2 key={index} xs={12} sm={6} md={4}>
							<div>
								<Typography
									fontStyle="oblique"
									variant="body1"
									gutterBottom>
									"{testimonial.text}"
								</Typography>
								<Typography
									textAlign="right"
									variant="h6"
									gutterBottom>
									- {testimonial.name}
								</Typography>
							</div>
						</Grid2>
					))}
				</Grid2>
			</Container>
		</section>
	)
}

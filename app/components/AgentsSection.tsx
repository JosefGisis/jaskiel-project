import { Container, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import AgentCard from "./AgentCard"
import { agents } from "../content"
import { colorTheme } from "../../styles/colorTheme"

export default function AgentsSection() {
	const { accent } = colorTheme
	return (
		<Container>
			<section
				id="services"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginBottom: "4rem",
				}}>
				<Typography
					marginTop="2.5rem"
					marginBottom="2.5rem"
					textAlign="center"
					variant="h4"
					maxWidth="700px"
					style={{ color: accent }}>
					The Jaskial Teams Agents are here to help you with all your
					real estate needs.
				</Typography>

				<Grid2
					container
					rowSpacing={5}
					columnSpacing={3}
					justifyItems="center">
					{agents.map((item, index) => (
						<Grid2 key={index} xs={12} sm={6} md={4}>
							<AgentCard
								text={item.text}
								url={item.imageURL}
								name={item.name}
								phone={item.phone}
								email={item.email}
							/>
						</Grid2>
					))}
				</Grid2>
			</section>
		</Container>
	)
}

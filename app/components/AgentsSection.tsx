import { Container, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import AgentCard from "./AgentCard"
import { agents } from "../content"

export default function AgentsSection() {
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
					marginBottom="2.5rem"
					textAlign="center"
					variant="h1">
					Our Experienced Agents are waiting to assist you!
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
								image={item.image}
								title={item.title}
							/>
						</Grid2>
					))}
				</Grid2>
			</section>
		</Container>
	)
}
import { Container, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import AgentCard from "./AgentCard"

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

const agents = [
	{
		name: "John Doe",
		title: "Real Estate Agent",
		phone: "123-456-7890",
		text: "John is a real estate agent with 10 years of experience. He has helped many families find their dream homes.",
		image: "",
		email: "",
		social: "",
	},
	{
		name: "Jane Doe",
		title: "Real Estate Agent",
		phone: "123-456-7890",
		text: "Jane is a real estate agent with 10 years of experience. She has helped many families find their dream homes.",
		image: "",
		email: "",
		social: "",
	},
	{
		name: "John Smith",
		title: "Real Estate Agent",
		phone: "123-456-7890",
		text: "John is a real estate agent with 10 years of experience. He has helped many families find their dream homes.",
		image: "",
		email: "",
		social: "",
	},
]

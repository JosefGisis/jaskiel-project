import { Container, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import AgentCard from "./AgentCard"
import { colorTheme } from "../../styles/colorTheme"
import { LinkType } from "../types"

export default function AgentsSection() {
	const { accent, primary } = colorTheme
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
					style={{
						marginTop: "2.5rem",
						marginBottom: "2.5rem",
						textAlign: "center",
						maxWidth: "700px",
					}}
					variant="h4">
					The Jaskiel Teams Agents are here to help you with all your
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

interface AgentInfoType {
	name: string
	phone: LinkType
	text: string
	alternateText?: string
	imageURL: string
	email: LinkType
	links: LinkType[]
}
export const agents: AgentInfoType[] = [
	{
		name: "Baila Jaskiel",
		text: `With over 12 years of experience in the real estate industry, award-winning agent Baila Jaskiel brings a distinctive approach to every transaction, ensuring your property stands out in a competitive market. Her reputation for honesty, integrity, and a deep commitment to serving the community has made Baila one of the top-selling agents in the region.`,
		imageURL: "images/avatar-3814049_1280.png",
		phone: { label: "848-223-2295", href: "tel:8482232295" },
		email: {
			label: "bjaskiel@gmail.com",
			href: "mailto:bjaskiel@gmail.com",
		},
		links: [],
	},
	{
		name: 'Malky Rivka "Malky" Zaks (Sternbuch)',
		text: `Malka Rivka brings in-depth expertise in the local real estate market, skillfully guiding clients through even the most complex transactions. 
		With a focus on delivering exceptional, customized service, Malky takes the time to understand each client’s unique needs, ensuring a highly personalized and seamless experience.`,
		imageURL: "images/avatar-3814049_1280.png",
		phone: { label: "845-274-7024", href: "tel:8452747024" },
		email: {
			label: "malkarivka27@gmail.com",
			href: "mailto:malkarivka27@gmail.com",
		},
		links: [],
	},
	{
		name: "Dina Inzelbuch (Cohen)",
		text: `Dina specializes in luxury properties and new construction, making her a trusted and knowledgeable professional. Her commitment to continuous learning ensures she stays ahead of market trends, empowering her to provide clients with expert insights and exceptional service. She strives to exceed expectations with personalized service, tailored strategies, and strong negotiation skills.`,
		imageURL: "images/avatar-3814049_1280.png",
		phone: { label: "773-240-1335", href: "tel:7732401335" },
		email: {
			label: "dina.cohen@kw.com",
			href: "dina.cohen@kw.com",
		},
		links: [],
	},
	{
		name: 'Jennifer "Esther" Gisis',
		text: `With a calm, yet no-nonsense approach, Esther has earned a reputation for getting the job done efficiently and effectively. Whether working with buyers, sellers, or investors, Esther brings a high level of professionalism and dedication to every transaction. Known for her attention to detail, clear communication, and tireless commitment to her clients, Esther ensures that every step of the real estate process is seamless and stress-free.
		`,
		imageURL: "images/avatar-3814049_1280.png",
		phone: { label: "732-773-2149", href: "tel:7327732149" },
		email: {
			label: "Jennifergisis8@gmail.com ",
			href: "mailto:Jennifergisis8@gmail.com ",
		},
		links: [],
	},
]

import { Container, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import AgentCard from "./AgentCard"
import { colorTheme } from "../../../styles/colorTheme"
import { LinkType } from "../../types"

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
		text: `
		Award-winning real estate agent Baila Jaskiel brings over 12 years of industry expertise, crafting unique property strategies that help clients achieve top market results. Her reputation for honesty, integrity, and community commitment has established her as a top-selling agent trusted by buyers and sellers alike.
		`,
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
		text: `Malka Rivka offers in-depth local market expertise, skillfully guiding clients through complex transactions with personalized, strategic service. Her unwavering commitment and meticulous attention to detail ensure a smooth, rewarding experience for first-time homebuyers, investors, and sellers alike.`,
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
		text: `Dina, a luxury property and new construction specialist, offers expert market insights and personalized strategies with strong negotiation skills. Her commitment to continuous learning and client success ensures professional, tailored service that delivers exceptional outcomes in every transaction.`,
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
		text: `Esther delivers efficient, professional real estate services with a no-nonsense approach, consistently exceeding client expectations through meticulous attention to detail and clear communication. Her extensive track record and unwavering dedication ensure seamless, stress-free transactions for buyers, sellers, and investors alike.
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

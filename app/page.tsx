import { Box, Container, Stack, Typography } from "@mui/material"
import SurveyForm from "./components/SurveyForm"
import WelcomeHero from "./components/WelcomeHero"
import AboutSection from "./components/AboutSection"
import AgentsSection from "./components/AgentsSection"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

export default function Page() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}>
			<Stack gap={4}>
				<WelcomeHero />
				<AboutSection />
				<AgentsSection />
				<SurveyForm />
			</Stack>
		</div>
	)
}

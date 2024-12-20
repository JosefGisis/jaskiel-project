import { Stack } from "@mui/material"
import SurveyForm from "../SurveyForm"
import WelcomeHero from "./components/WelcomeHero"
import AboutSection from "./components/AboutSection"
import AgentsSection from "./components/AgentsSection"
import Testimonials from "./components/Testimonials"

export default function Page() {
	return (
		<div
			className="flex flex-col items-center"
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}>
			<Stack gap={4}>
				<WelcomeHero />
				<AboutSection />
				<AgentsSection />
				<Testimonials />
				<SurveyForm />
			</Stack>
		</div>
	)
}

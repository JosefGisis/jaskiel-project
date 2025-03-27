import WelcomeHero from "./components/WelcomeHero"
import AboutSection from "./components/AboutSection"
import AgentsSection from "./components/AgentSection"
import Testimonials from "./components/Testimonials"
import SurveySection from "./components/SurveySection"

export default function Page() {
	return (
		<div className="flex flex-col w-full items-center">
			<WelcomeHero />
			<AboutSection />
			<AgentsSection />
			<Testimonials />
			{/* <SurveySection /> */}
		</div>
	)
}

import WelcomeHero from "./components/WelcomeHero"
import AboutSection from "./components/AboutSection"
import AgentsSection from "./components/AgentSection"
import Testimonials from "./components/Testimonials"
import SurveySection from "./components/SurveySection"
import StatsSection from "./components/StatsSection"

export default function Page() {
	return (
		<div className="flex flex-col w-full items-center">
			<WelcomeHero />
			<AboutSection />
			<StatsSection />
			<AgentsSection />
			<Testimonials />
			<SurveySection />
		</div>
	)
}

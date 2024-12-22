import SurveyForm from "../SurveyForm"
import WelcomeHero from "./components/WelcomeHero"
import AboutSection from "./components/AboutSection"
import AgentsSection from "./components/AgentsSection"
import Testimonials from "./components/Testimonials"
import NewAboutSection from "./components/NewAboutSection"
import NewAgentsSection from "./components/NewAgentSection"
import NewTestimonials from "./components/NewTestimonials"

export default function Page() {
	return (
		<div className="flex flex-col w-full items-center">
			<WelcomeHero />
			<NewAboutSection />
			<NewAgentsSection />
			<NewTestimonials />
			<SurveyForm />
		</div>
	)
}

import SurveyForm from "../SurveyForm"
import WelcomeHero from "./components/WelcomeHero"
import AboutSection from "./components/AboutSection"
import AgentsSection from "./components/AgentsSection"
import Testimonials from "./components/Testimonials"
import NewAboutSection from "./components/NewAboutSection"

export default function Page() {
	return (
		<div className="flex flex-col w-full items-center">
			<WelcomeHero />
			<AboutSection />
			<NewAboutSection />

			<AgentsSection />
			<Testimonials />
			<SurveyForm />
		</div>
	)
}

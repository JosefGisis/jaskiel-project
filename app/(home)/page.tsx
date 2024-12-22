import SurveyForm from "../SurveyForm"
import WelcomeHero from "./components/WelcomeHero"
import AboutSection from "./components/AboutSection"
import AgentsSection from "./components/AgentsSection"
import Testimonials from "./components/Testimonials"

export default function Page() {
	return (
		<div className="flex flex-col w-full items-center">
			<div className="stack w-full">
				<WelcomeHero />
				<AboutSection />

				<AgentsSection />
				<Testimonials />
				<SurveyForm />
			</div>
		</div>
	)
}

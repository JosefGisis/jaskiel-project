import SurveyForm from "../SurveyForm"
import WelcomeHero from "./components/WelcomeHero"
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

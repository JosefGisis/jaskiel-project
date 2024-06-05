import { Box, Container, Stack, Typography } from "@mui/material"
import SurveyForm from "./components/SurveyForm"
import WelcomeHero from "./components/WelcomeHero"

export default function Page() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}>
			<Stack>
				<WelcomeHero />

				<Container maxWidth="sm">
					<SurveyForm />
				</Container>
			</Stack>
		</div>
	)
}

"use client"

import React, { useState } from "react"
import { Survey } from "survey-react-ui"
import { ITheme, Model } from "survey-core"
import { themeJson, surveyJson } from "./surveyJson"
import { track } from "@vercel/analytics"

import mailer from "./mailer"
import CompletedMessage from "./CompletedMessage"
import uploadBlob from "../uploadBlob"

export default function SurveyForm() {
	const [completed, setCompleted] = useState(false)

	const survey = new Model(surveyJson)

	survey.applyTheme(themeJson as ITheme)

	survey.showCompletedPage = false

	survey.onComplete.add((survey) => {
		// Survey analytics tracks contact form submissions
		track("Contact form submitted")
		mailer(survey.data)
		setCompleted(true)
	})

	survey.onValueChanged.add((survey, options) => {
		uploadBlob("public/logos", "Jaskiel-logo-inverted-org.png")
	})

	return (
		<div className="w-full max-w-screen-md">
			{completed ? (
				<CompletedMessage setCompleted={setCompleted} />
			) : (
				<div id="contact-us">
					<h3 className="text-2xl text-center">Contact Us</h3>
					<h6 className="text-center text-lg">
						Reach out with any questions comments or concerns.
					</h6>
					<Survey model={survey} />
				</div>
			)}
		</div>
	)
}

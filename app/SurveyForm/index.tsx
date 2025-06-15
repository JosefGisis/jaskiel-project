"use client"

import React, { useState } from "react"
import { Survey } from "survey-react-ui"
import { ITheme, Model } from "survey-core"
import { themeJson, surveyJson } from "./surveyJson"
import { track } from "@vercel/analytics"

import mailer from "./mailer"
import CompletedMessage from "./CompletedMessage"

export default function SurveyForm() {
	const [completed, setCompleted] = useState(false)

	const survey = new Model(surveyJson)

	survey.applyTheme(themeJson as ITheme)

	survey.showCompletedPage = false

	survey.onComplete.add((survey) => {
		track("Contact form submitted")
		mailer(survey.data)
		setCompleted(true)
	})

	return (
		<div className="w-full h-full mt-6">
			{completed ? (
				<CompletedMessage setCompleted={setCompleted} />
			) : (
				<div className="xl-container flex flex-col items-center gap-8">
					<h3 className="section-title !text-black">Contact Us</h3>
					<h6 className="section-subtitle !text-black">
						Reach out with any questions comments or concerns.
					</h6>
					<Survey model={survey} />
				</div>
			)}
		</div>
	)
}

"use client"

import React, { useState } from "react"
import { Survey } from "survey-react-ui"
import { Model } from "survey-core"
import mailer from "../mailer"
import CompletedMessage from "./CompletedMessage"
import { Typography, Container } from "@mui/material"

export default function SurveyForm() {
	const [completed, setCompleted] = useState(false)

	const surveyJson = {
		logoPosition: "right",
		showQuestionNumbers: "false",
		pages: [
			{
				name: "page1",
				elements: [
					{
						type: "text",
						name: "email",
						title: "Email",
						isRequired: true,
						inputType: "email",
					},
					{
						type: "multipletext",
						name: "name",
						title: "Name",
						items: [
							{
								name: "first",
								title: "First",
							},
							{
								name: "last",
								title: "Last",
							},
						],
						colCount: 2,
					},
					{
						type: "text",
						name: "phone",
						title: "Phone Number",
						description:
							"Provide a phone number if you would like us to give you a callback.",
						inputType: "tel",
					},
					{
						type: "comment",
						description:
							"Please provide any questions, requests, or quotes.",
						name: "request",
						title: "Question",
						isRequired: true,
					},
				],
			},
		],
	}
	const survey = new Model(surveyJson)

	// @ts-ignore
	survey.applyTheme(themeJson)

	survey.showCompletedPage = false

	// This is a hack to make the survey update on typing.
	survey.textUpdateMode = "onTyping"

	survey.onComplete.add((survey) => {
		mailer(survey.data)
		setCompleted(true)
	})

	return (
		<Container maxWidth="md">
			{completed ? (
				<CompletedMessage setCompleted={setCompleted} />
			) : (
				<div>
					<Typography variant="h3" textAlign="center">
						Contact Us
					</Typography>
					<Typography variant="h6" textAlign="center">
						Reach out with any questions comments or concerns.
					</Typography>
					<Survey model={survey} />
				</div>
			)}
		</Container>
	)
}

export const themeJson = {
	themeName: "plain",
	colorPalette: "light",
	isPanelless: false,
	backgroundImage: "",
	backgroundOpacity: 1,
	backgroundImageAttachment: "scroll",
	backgroundImageFit: "cover",

	cssVariables: {
		"--sjs-font-family": "Georgia, serif",
		"--sjs-corner-radius": "4px",
		"--sjs-base-unit": "8px",
		"--sjs-shadow-small":
			"0px 2px 0px 2px rgba(228, 228, 228, 1), 0px 0px 0px 2px rgba(228, 228, 228, 1)",
		"--sjs-shadow-inner":
			"0px 0px 0px 2px rgba(228, 228, 228, 1), 0px -2px 0px 2px rgba(228, 228, 228, 1)",
		"--sjs-border-default": "rgba(0, 0, 0, 0.15)",
		"--sjs-border-light": "rgba(0, 0, 0, 0.15)",
		"--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
		"--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
		"--sjs-general-backcolor-dim-light": "rgba(255, 255, 255, 1)",
		"--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
		"--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
		"--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
		"--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
		"--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
		"--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
		"--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
		"--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
		"--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
		"--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
		"--sjs-shadow-small-reset":
			"0px 0px 0px 0px rgba(228, 228, 228, 1), 0px 0px 0px 0px rgba(228, 228, 228, 1)",
		"--sjs-shadow-medium": "0px 0px 0px 1px rgba(0, 0, 0, 0.1)",
		"--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
		"--sjs-shadow-inner-reset":
			"0px 0px 0px 0px rgba(228, 228, 228, 1), 0px 0px 0px 0px rgba(228, 228, 228, 1)",
		"--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
		"--sjs-special-red": "rgba(229, 10, 62, 1)",
		"--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
		"--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
		"--sjs-special-green": "rgba(25, 179, 148, 1)",
		"--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
		"--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
		"--sjs-special-blue": "rgba(67, 127, 217, 1)",
		"--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
		"--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
		"--sjs-special-yellow": "rgba(255, 152, 20, 1)",
		"--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
		"--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
		"--sjs-article-font-xx-large-textDecoration": "none",
		"--sjs-article-font-xx-large-fontWeight": "700",
		"--sjs-article-font-xx-large-fontStyle": "normal",
		"--sjs-article-font-xx-large-fontStretch": "normal",
		"--sjs-article-font-xx-large-letterSpacing": "0",
		"--sjs-article-font-xx-large-lineHeight": "64px",
		"--sjs-article-font-xx-large-paragraphIndent": "0px",
		"--sjs-article-font-xx-large-textCase": "none",
		"--sjs-article-font-x-large-textDecoration": "none",
		"--sjs-article-font-x-large-fontWeight": "700",
		"--sjs-article-font-x-large-fontStyle": "normal",
		"--sjs-article-font-x-large-fontStretch": "normal",
		"--sjs-article-font-x-large-letterSpacing": "0",
		"--sjs-article-font-x-large-lineHeight": "56px",
		"--sjs-article-font-x-large-paragraphIndent": "0px",
		"--sjs-article-font-x-large-textCase": "none",
		"--sjs-article-font-large-textDecoration": "none",
		"--sjs-article-font-large-fontWeight": "700",
		"--sjs-article-font-large-fontStyle": "normal",
		"--sjs-article-font-large-fontStretch": "normal",
		"--sjs-article-font-large-letterSpacing": "0",
		"--sjs-article-font-large-lineHeight": "40px",
		"--sjs-article-font-large-paragraphIndent": "0px",
		"--sjs-article-font-large-textCase": "none",
		"--sjs-article-font-medium-textDecoration": "none",
		"--sjs-article-font-medium-fontWeight": "700",
		"--sjs-article-font-medium-fontStyle": "normal",
		"--sjs-article-font-medium-fontStretch": "normal",
		"--sjs-article-font-medium-letterSpacing": "0",
		"--sjs-article-font-medium-lineHeight": "32px",
		"--sjs-article-font-medium-paragraphIndent": "0px",
		"--sjs-article-font-medium-textCase": "none",
		"--sjs-article-font-default-textDecoration": "none",
		"--sjs-article-font-default-fontWeight": "400",
		"--sjs-article-font-default-fontStyle": "normal",
		"--sjs-article-font-default-fontStretch": "normal",
		"--sjs-article-font-default-letterSpacing": "0",
		"--sjs-article-font-default-lineHeight": "28px",
		"--sjs-article-font-default-paragraphIndent": "0px",
		"--sjs-article-font-default-textCase": "none",
		"--sjs-general-backcolor-dim": "#FFFFFF",
		"--sjs-primary-backcolor": "rgba(43, 67, 107, 1)",
		"--sjs-primary-backcolor-dark": "rgba(35, 54, 87, 1)",
		"--sjs-primary-backcolor-light": "rgba(43, 67, 107, 0.1)",
		"--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
		"--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
		"--sjs-font-surveytitle-weight": "400",
	},
	headerView: "basic",
}

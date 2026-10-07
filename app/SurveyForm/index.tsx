"use client"

import React, { useState } from "react"
import { Survey } from "survey-react-ui"
import { ITheme, Model } from "survey-core"
import { themeJson, surveyJson } from "./surveyJson"
import { track } from "@vercel/analytics"

import mailer from "./mailer"
import CompletedMessage from "./CompletedMessage"

type Status = "editing" | "sending" | "sent" | "failed"

export default function SurveyForm() {
	const [status, setStatus] = useState<Status>("editing")

	// Build the survey model once; rebuilding it on every render resets its state.
	const [survey] = useState(() => {
		const model = new Model(surveyJson)
		model.applyTheme(themeJson as ITheme)
		model.showCompletedPage = false
		model.onComplete.add(async (sender) => {
			setStatus("sending")
			const { ok } = await mailer(sender.data).catch(() => ({ ok: false }))
			if (ok) track("Contact form submitted")
			setStatus(ok ? "sent" : "failed")
		})
		return model
	})

	const startOver = () => {
		survey.clear()
		setStatus("editing")
	}

	if (status === "sent") return <CompletedMessage setCompleted={startOver} />

	return (
		<div className="w-full h-full mt-6">
			<div className="xl-container flex flex-col items-center gap-6">
				<h2 className="section-title !text-black">Contact Us</h2>
				<div className="w-16 h-[2px] bg-primary/60 mx-auto" />
				<p className="section-subtitle !text-black/70">
					Reach out with any questions, comments, or concerns.
				</p>

				{status === "sending" && <p className="section-subtitle !text-black/70">Sending your message…</p>}

				{status === "failed" && (
					<div className="flex flex-col items-center gap-4 !text-black">
						<p className="section-subtitle !text-black">
							Sorry, we couldn&apos;t send your message. Please try again, or email us at{" "}
							<a href="mailto:thejaskielteam@gmail.com" className="underline">
								thejaskielteam@gmail.com
							</a>
							.
						</p>
						<button
							onClick={() => {
								// Reopen the completed survey with the visitor's answers kept.
								survey.clear(false, true)
								setStatus("editing")
							}}
							className="btn btn-secondary">
							Try again
						</button>
					</div>
				)}

				{status === "editing" && <Survey model={survey} />}
			</div>
		</div>
	)
}

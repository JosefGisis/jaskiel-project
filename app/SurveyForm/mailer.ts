"use server"

import nodeMailer from "nodemailer"

const LOGO_PNG_URL =
	"https://y0cvwbztvkvzidgv.public.blob.vercel-storage.com/jaskiel/jaskiel-header-image-sPwukwiH7Ygz8lRnyVvT5hBlr7HByj.png"

const EMAIL_PATTERN = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/
const MAX_EMAIL_LENGTH = 254
const MAX_NAME_LENGTH = 100
const MAX_PHONE_LENGTH = 30
const MAX_REQUEST_LENGTH = 5000

export interface SurveyData {
	email: string
	name?: {
		first?: string
		last?: string
	}
	phone?: string
	request: string
}

const transporter = nodeMailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GOOGLE_APP_PASSWORD,
	},
})

function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;")
}

function optionalText(value: unknown, maxLength: number) {
	if (typeof value !== "string") return ""
	return value.trim().slice(0, maxLength)
}

// Server actions are public endpoints, so the input is re-validated here
// rather than trusting the form's client-side checks.
function parseSurveyData(data: unknown): SurveyData | null {
	if (!data || typeof data !== "object") return null
	const raw = data as Record<string, unknown>

	const email = optionalText(raw.email, MAX_EMAIL_LENGTH + 1)
	if (email.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(email)) return null

	const request = optionalText(raw.request, MAX_REQUEST_LENGTH)
	if (!request) return null

	const name = raw.name && typeof raw.name === "object" ? (raw.name as Record<string, unknown>) : {}

	return {
		email,
		name: {
			first: optionalText(name.first, MAX_NAME_LENGTH),
			last: optionalText(name.last, MAX_NAME_LENGTH),
		},
		phone: optionalText(raw.phone, MAX_PHONE_LENGTH),
		request,
	}
}

export default async function mailer(data: unknown): Promise<{ ok: boolean }> {
	const survey = parseSurveyData(data)
	if (!survey) return { ok: false }

	const email = escapeHtml(survey.email)
	const fullName = escapeHtml(`${survey.name?.first ?? ""} ${survey.name?.last ?? ""}`.trim())
	const phone = survey.phone ? escapeHtml(survey.phone) : ""
	const request = escapeHtml(survey.request).replace(/\n/g, "<br />")

	try {
		await transporter.sendMail({
			from: process.env.GMAIL_USER,
			to: [process.env.GMAIL_USER || "", process.env.THIRD_PARTY_EMAIL || ""],
			replyTo: survey.email,
			subject: "Request received",
			html: `
				<p>Customer email: ${email}</p>
				<p>Customer name: ${fullName || "Not provided"}</p>
				${phone ? `<p>Customer would like a callback at <a href="tel:${survey.phone?.replace(/[^\d+]/g, "")}">${phone}</a></p>` : ""}
				<p>Customer request:</p>
				<p>${request}</p>
			`,
		})

		// The auto-reply deliberately does not echo the visitor's message:
		// echoing it would let anyone send text of their choosing to any address
		// from the business's Gmail account.
		await transporter.sendMail({
			from: process.env.GMAIL_USER,
			to: survey.email,
			subject: "Thank you! We have received your request.",
			text: "Thank you for reaching out to The Jaskiel Team. We have received your message and will get back to you as soon as possible. This is an automated response.",
			html: `
			<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background-color: #000000;">
				<img src="${LOGO_PNG_URL}" alt="The Jaskiel Team Logo" style="width: 300px; margin-bottom: 2rem;" />

				<div style="background-color: #ffffff; border-radius: 8px; padding: 2rem; margin: 1rem 0;">
					<h1 style="color: #000000; font-size: 24px; margin-bottom: 1rem;">
						Thank you for reaching out to us!
					</h1>

					<p style="color: #000000; font-size: 16px; margin-bottom: 2rem;">
						We have received your message and will get back to you as soon as possible.
					</p>

					<div style="border-top: 1px solid #e1dddd; padding-top: 1rem; margin-top: 2rem;">
						<p style="color: #000000; margin-bottom: 0.5rem; font-size: 14px;">
							Feel free to reply to this email with any additional questions.
						</p>

						<div style="margin-top: 1rem; color: #e4c07e;">
							<p style="margin: 0.5rem 0;">
								<a href="http://www.thejaskielteam.com" style="color: #e4c07e; text-decoration: none;">
									www.thejaskielteam.com
								</a>
							</p>
							<p style="margin: 0.5rem 0;">
								<a href="tel:8482232295" style="color: #e4c07e; text-decoration: none;">
									(848)-223-2295
								</a>
							</p>
							<p style="margin: 0.5rem 0;">
								<a href="mailto:thejaskielteam@gmail.com" style="color: #e4c07e; text-decoration: none;">
									thejaskielteam@gmail.com
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		`,
		})

		return { ok: true }
	} catch (error) {
		console.error("Failed to send contact form email", error)
		return { ok: false }
	}
}

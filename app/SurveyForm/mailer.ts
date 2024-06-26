"use server"

import nodeMailer from "nodemailer"

const LOGO_SVG_URL =
	"https://y0cvwbztvkvzidgv.public.blob.vercel-storage.com/jaskiel-logo-inverted-org-2J5Y0yGXfNGDU9mJizFqlbwLNXvTSu.svg"

const LOGO_PNG_URL =
	"https://y0cvwbztvkvzidgv.public.blob.vercel-storage.com/jaskiel-logo-inverted-org-XIzicXRbi6wyQ5bzBEDUmVC8DXH70b.png"

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
	host: "smtppro.zoho.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.ADMIN_EMAIL,
		pass: process.env.ADMIN_PASSWORD,
	},
})

export default async function mailer(data: SurveyData) {
	await transporter.sendMail({
		from: data.email,
		to: process.env.GROUP_EMAIL,
		subject: "Request received",
		html: `
	        <p>Customer email: ${data.email}</p>
	        <p>Customer name: ${data.name?.first} ${data.name?.last}</p>
	        ${data.phone ? `<p>Customer would like a callback at <a href="tel:${data.phone}"> ${data.phone}</p>` : ""}
	        <p>Customer request: ${data.request}</p>
	    `,
	})

	await transporter.sendMail({
		from: process.env.GROUP_EMAIL,
		to: data.email,
		subject: "Thank you! We have received your request.",
		text: "This is an automated response.",
		html: `
			<div style="background-color: rgb(43, 67, 107);color: white !important;padding: 1.5rem;">
				<img src=${LOGO_PNG_URL} alt="The Jaskiel Team Logo" style="width: 200px" />
				<h1 style="color: white">Thank you for reaching out to us!</h1>
				<h4 style="color: white">
					We have received your request and will get back to you as soon as
					possible.
				</h4>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p style="color: white">Regarding:</p>
				<div style="background-color: rgba(255, 255, 255, 0.1);border: 1px;border-style: solid;border-color: white;padding: 0.7rem; max-width: 550px">
					<p style="color: white">${data.request}</p>
				</div>
				<p style="color: white">
					Feel free to reply to this email if you have any additional questions or
					concerns or would like to change your original request.
				</p>
				<h3 style="margin-top: 2rem; color: white">-<i> The Jaskiel Team</i></h3>
				<p>
					<a style="color: white !important; text-decoration: underline" href="http://www.thejaskielteam.com">
						www.thejaskielteam.com
					</a>
				</p>
				<p>
					<a style="color: white !important; text-decoration: underline" href="tel:8482232295">
						(848)-223-2295
					</a>
				</p>
				<p>
					<a style="color: white !important; text-decoration: underline" href="mailto:office@thejaskielteam.com">
						office@thejaskielteam.com
					</a>
				</p>
			</div>
        `,
	})
}

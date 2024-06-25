"use server"

// for vercel update

import nodeMailer from "nodemailer"

const logoURL = "../public/logos/jaskiel-logo-inverted-org.svg"

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
}

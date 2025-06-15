"use server"

import nodeMailer from "nodemailer"

const LOGO_PNG_URL =
	"https://y0cvwbztvkvzidgv.public.blob.vercel-storage.com/jaskiel/jaskiel-header-image-sPwukwiH7Ygz8lRnyVvT5hBlr7HByj.png"

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

export default async function mailer(data: SurveyData) {
	await transporter.sendMail({
		from: process.env.GMAIL_USER,
		to: [process.env.GMAIL_USER || "", process.env.THIRD_PARTY_EMAIL || ""],
		subject: "Request received",
		html: `
	        <p>Customer email: ${data.email}</p>
	        <p>Customer name: ${data.name?.first} ${data.name?.last}</p>
	        ${data.phone ? `<p>Customer would like a callback at <a href="tel:${data.phone}"> ${data.phone}</p>` : ""}
	        <p>Customer request: ${data.request}</p>
	    `,
	})
	
	await transporter.sendMail({
		from: process.env.GMAIL_USER,
		to: data.email,
		subject: "Thank you! We have received your request.",
		text: "This is an automated response.",
		html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background-color: #000000;">
            <img src=${LOGO_PNG_URL} alt="The Jaskiel Team Logo" style="width: 300px; margin-bottom: 2rem;" />
            
            <div style="background-color: #ffffff; border-radius: 8px; padding: 2rem; margin: 1rem 0;">
                <h1 style="color: #000000; font-size: 24px; margin-bottom: 1rem;">
                    Thank you for reaching out to us!
                </h1>
                
                <p style="color: #000000; font-size: 16px; margin-bottom: 2rem;">
                    We have received your message and will get back to you as soon as possible.
                </p>

                <div style="margin-bottom: 2rem;">
                    <p style="color: #000000; font-weight: bold; margin-bottom: 0.5rem;">Your message:</p>
                    <div style="background-color: #e1dddd; padding: 1rem; border-radius: 4px;">
                        <p style="color: #000000; margin: 0;">${data.request}</p>
                    </div>
                </div>

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
}

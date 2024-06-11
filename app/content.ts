export interface LinkType {
	label: string
	href: string
}

export const welcome = {
	title: "Your Dream Home is Closer than You Think!",
	subtitle:
		"The Jaskiel Team is your premiere real estate agency for Lakewood, Jackson, Howell, Toms River, and neighboring communities.",
}

interface AboutType {
	title: string
	text: string
	image: string
}
export const about: AboutType[] = [
	{
		title: "Who We Are",
		text: `
			We are The Jaskiel Team, your premier real estate agency serving Lakewood, Jackson, Howell, Toms River and the surrounding communities.
			Founded by the award-winning real estate professional Baila Jackson, our team is dedicated to providing exceptional service and expertise
			in every aspect of the real estate process.
			Our goal is to ensure that every transaction is smooth, stress-free, and rewarding for our clients.
			Whether you're looking to buy your first home, sell your current residence, or invest in real estate, The Jaskiel Team is here to guide 
			you every step of the way.`,
		image: "images/pexels-pavel-danilyuk-7937225.jpg",
	},
	{
		title: "Commitment to Excellence",
		text: `
			At The Jaskiel Team, we are proud to set the standard for excellence in real estate sales and client service. 
			We prioritize responsiveness, ensuring that you receive timely and personalized attention.
			We believe that ethical conduct is the cornerstone of trust and reliability in the real estate profession.
			Our unwavering commitment to these ideals enables us to deliver exceptional experiences for our clients and contribute 
			positively to the real estate industry as a whole.
		`,
		image: "images/pexels-karolina-grabowska-5398881.jpg",
	},
	{
		title: "Communication and Guidance",
		text: `
			Whether you're a first-time homebuyer, looking to sell your current property, or seeking investment opportunities, our agents are prepared 
			to assist you at every turn.
 			Our agents are available to communicate with you at your convenience, whether it's during regular business hours or outside 
			of them. We understand the importance of being accessible and responsive to our clients' needs, which is why we strive to 
			maintain open lines of communication throughout your real estate journey.		
		`,
		image: "images/pexels-pixabay-261621.jpg",
	},
]

interface AgentInfoType {
	name: string
	phone: LinkType
	text: string
	imageURL: string
	email: LinkType
	links: LinkType[]
}
export const agents: AgentInfoType[] = [
	{
		name: "Baila Jaskiel",
		text: "",
		imageURL: "images/avatar-3814049_1280.png",
		phone: { label: "848-223-2295", href: "tel:8482232295" },
		email: {
			label: "bjaskiel@gmail.com",
			href: "mailto:bjaskiel@gmail.com",
		},
		links: [],
	},
	{
		name: 'Malky Rivka "Malky" Zaks (Sternbuch)',
		text: "",
		imageURL: "images/avatar-3814049_1280.png",
		phone: { label: "845-274-7024", href: "tel:8452747024" },
		email: {
			label: "malkarivka27@gmail.com",
			href: "mailto:malkarivka27@gmail.com",
		},
		links: [],
	},
	{
		name: "Dina Inzelbuch (Cohen)",
		text: "",
		imageURL: "images/avatar-3814049_1280.png",
		phone: { label: "773-240-1335", href: "tel:7732401335" },
		email: {
			label: "dina.cohen@kw.com",
			href: "dina.cohen@kw.com",
		},
		links: [],
	},
	{
		name: 'Jennifer "Esther" Gisis',
		text: "",
		imageURL: "images/avatar-3814049_1280.png",
		phone: { label: "732-773-2149", href: "tel:7327732149" },
		email: {
			label: "Jennifergisis8@gmail.com ",
			href: "mailto:Jennifergisis8@gmail.com ",
		},
		links: [],
	},
]

export const testimonials: { text: string; name: string }[] = [
	{
		text: `
			Baila really cares about her clients and goes way beyond the call of duty to help her
			clients out. Baila is honest, kind and responsive. Multiple times she advised against
			buying a home which in retrospect we agreed would have been a poor purchase. She
			gave us hours of time on the phone despite her busy schedule. We always knew she
			had our best interest in mind. Baila reached out to me months after closing to give me
			advice on re-financing my home so that I could save more on my mortgage. That's just
			one example of her dedication, honesty and focus on her clients.
		`,
		name: "Tzipora D.",
	},
	{
		text: `
			Baila is a one of a kind realtor who really cares! She got to know all our 
			likes and dislikes and worked tirelessly to find us our perfect home with endless 
			patience and availability and never any pressure. Her extensive knowledge made looking 
			and actually purchasing a pleasure!
		`,
		name: "Abraham A.",
	},
	{
		text: `
			Ms. Jaskiel was attentive, responsive, and calm. She was a great negotiator and was 
			there for us from showing to closing. She even followed up after we had moved in to check 
			in how the house was and if there were any further issues. Highly recommended!
		`,
		name: "Jonathan M.",
	},
	{
		text: `
			Baila is an energetic real estate professional, who was attentive to our needs and a
			pleasure to work with. She communicated daily and very knowledgeable, and has a
			good relationship with other realtors. She often bent her schedule to make it work for
			our schedule. I would highly recommend Baila for buying or selling a home!
		`,
		name: "Brocha H.",
	},
]

export const footerLinks: {
	phone: LinkType
	email: LinkType
	address: LinkType
	otherLinks: LinkType[]
} = {
	phone: { label: "848-223-2295", href: "tel:8482232295" },
	email: { label: "bjaskiel@gmail.com", href: "mailto:bjaskiel@gmail.com" },
	address: {
		label: "353 N County Line Rd, Jackson Township, NJ 08527",
		href: "https://www.google.com/maps/place/Keller+Williams+Monmouth%2FOcean+-+John+Meeker/@40.13925,-74.3017685,17z/data=!3m1!4b1!4m6!3m5!1s0x89c17f46cf372a79:0xffc481e5d2923c3c!8m2!3d40.13925!4d-74.3017685!16s%2Fg%2F11g1ppy0vt?entry=ttu",
	},
	otherLinks: [
		{ label: "Zillow", href: "https://www.zillow.com/profile/bjaskiel" },
	],
}

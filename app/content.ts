export const welcome = {
	title: "Your Dream Home is Closer than You Think!",
	subtitle: "Find the perfect home for you and your family.",
}

interface AboutType {
	title: string
	text: string
	image: string
}
export const about: AboutType[] = [
	{
		title: "Who We Are",
		text: "The JaskialTeam stands at the forefront of the real estate industry, blending unmatched expertise with unwavering dedication to our clients' success. Our team comprises seasoned professionals who are not just agents but advisors, guiding buyers and sellers through every step of the process with precision and care. We pride ourselves on our deep understanding of the market, leveraging cutting-edge tools and strategies to navigate even the most complex transactions smoothly.",
		image: "images/pexels-binyaminmellish-1396122.jpg",
	},
	{
		title: "Client-Centric Approach",
		text: "At the heart of the JaskialTeam lies a profound commitment to putting our clients first. We believe in fostering long-term relationships built on trust, transparency, and exceptional service. Whether you're looking to buy your dream home or sell your current one, our team works tirelessly to exceed expectations, ensuring a stress-free experience that reflects your unique needs and goals. We're not just in the business of selling properties; we're in the business of creating memories and building futures.",
		image: "images/pexels-binyaminmellish-1396122.jpg",
	},
	{
		title: "Innovative Solutions",
		text: "In an ever-evolving real estate landscape, the JaskialTeam remains ahead of the curve, offering innovative solutions that set us apart. From utilizing advanced technology to stay ahead of market trends to implementing creative marketing strategies that maximize property exposure, we're constantly evolving to meet the demands of today's dynamic market. Our goal is not just to facilitate transactions but to revolutionize the way people buy and sell homes, making the journey as rewarding and seamless as possible.",
		image: "images/pexels-binyaminmellish-1396122.jpg",
	},
]

interface AgentInfoType {
	name: string
	phone: { label: string; href: string }
	text: string
	imageURL: string
	email: { label: string; href: string }
	links: { label: string; href: string }[]
}
export const agents: AgentInfoType[] = [
	{
		name: "Josef Gisis",
		text: "John is a real estate agent with 10 years of experience. He has helped many families find their dream homes.",
		imageURL: "/images/Tesser_2-21-673.jpg",
		phone: { label: "732-642-8750", href: "tel:7326428750" },
		email: {
			label: "jsquared.gisis@gmail.com",
			href: "mailto:jsquared.gisis@gmail.com",
		},
		links: [
			{
				label: "Website",
				href: "https://www.josefgisis.com",
			},
		],
	},
	{
		name: "Josef Gisis",
		text: "John is a real estate agent with 10 years of experience. He has helped many families find their dream homes.",
		imageURL: "/images/Tesser_2-21-673.jpg",
		phone: { label: "732-642-8750", href: "tel:7326428750" },
		email: {
			label: "jsquared.gisis@gmail.com",
			href: "mailto:jsquared.gisis@gmail.com",
		},
		links: [
			{
				label: "Website",
				href: "https://www.josefgisis.com",
			},
		],
	},
	{
		name: "Josef Gisis",
		text: "John is a real estate agent with 10 years of experience. He has helped many families find their dream homes.",
		imageURL: "/images/Tesser_2-21-673.jpg",
		phone: { label: "732-642-8750", href: "tel:7326428750" },
		email: {
			label: "jsquared.gisis@gmail.com",
			href: "mailto:jsquared.gisis@gmail.com",
		},
		links: [
			{
				label: "Website",
				href: "https://www.josefgisis.com",
			},
		],
	},
	{
		name: "Josef Gisis",
		text: "John is a real estate agent with 10 years of experience. He has helped many families find their dream homes.",
		imageURL: "/images/Tesser_2-21-673.jpg",
		phone: { label: "732-642-8750", href: "tel:7326428750" },
		email: {
			label: "jsquared.gisis@gmail.com",
			href: "mailto:jsquared.gisis@gmail.com",
		},
		links: [
			{
				label: "Website",
				href: "https://www.josefgisis.com",
			},
		],
	},
	{
		name: "Josef Gisis",
		text: "John is a real estate agent with 10 years of experience. He has helped many families find their dream homes.",
		imageURL: "/images/Tesser_2-21-673.jpg",
		phone: { label: "732-642-8750", href: "tel:7326428750" },
		email: {
			label: "jsquared.gisis@gmail.com",
			href: "mailto:jsquared.gisis@gmail.com",
		},
		links: [
			{
				label: "Website",
				href: "https://www.josefgisis.com",
			},
		],
	},
	{
		name: "Josef Gisis",
		text: "John is a real estate agent with 10 years of experience. He has helped many families find their dream homes.",
		imageURL: "/images/Tesser_2-21-673.jpg",
		phone: { label: "732-642-8750", href: "tel:7326428750" },
		email: {
			label: "jsquared.gisis@gmail.com",
			href: "mailto:jsquared.gisis@gmail.com",
		},
		links: [
			{
				label: "Website",
				href: "https://www.josefgisis.com",
			},
		],
	},
]

export const testimonials: { text: string; name: string }[] = [
	{
		text: "The JaskialTeam made the process of selling our home a breeze. They were professional, knowledgeable, and always had our best interests at heart. We couldn't be happier with the results!",
		name: "John and Jane Doe",
	},
	{
		text: "Working with the JaskialTeam was an absolute pleasure. They took the time to understand our needs and preferences, ensuring that we found the perfect home for our family. We highly recommend their services!",
		name: "The Smith Family",
	},
	{
		text: "The JaskialTeam exceeded our expectations in every way. Their attention to detail, market expertise, and exceptional service made the home-buying process stress-free and enjoyable. We're so grateful for their help!",
		name: "The Johnsons",
	},
	{
		text: "We can't thank the JaskialTeam enough for helping us find our dream home. Their dedication, professionalism, and personalized approach made all the difference. We highly recommend their services to anyone looking to buy or sell a home!",
		name: "The Garcias",
	},
	{
		text: "The JaskialTeam made the process of selling our home a breeze. They were professional, knowledgeable, and always had our best interests at heart. We couldn't be happier with the results!",
		name: "John and Jane Doe",
	},
	{
		text: "Working with the JaskialTeam was an absolute pleasure. They took the time to understand our needs and preferences, ensuring that we found the perfect home for our family. We highly recommend their services!",
		name: "The Smith Family",
	},
	{
		text: "The JaskialTeam exceeded our expectations in every way. Their attention to detail, market expertise, and exceptional service made the home-buying process stress-free and enjoyable. We're so grateful for their help!",
		name: "The Johnsons",
	},
	{
		text: "We can't thank the JaskialTeam enough for helping us find our dream home. Their dedication, professionalism, and personalized approach made all the difference. We highly recommend their services to anyone looking to buy or sell a home!",
		name: "The Garcias",
	},
]

export default function AboutSection() {
	return (
		<section>
			<div className="flex flex-col items-center">
				{/* card background color is determined by index */}
				{about.map((item, index) => (
					<div
						key={index}
						className={`w-full bg-${index + (1 % 2) === 0 ? "black" : index + (1 % 3) === 0 ? "neutral" : "white"} text-${index + (1 % 2) === 0 ? "white" : "black"} p-10`}>
						{/* depending on screen width the image and text is displayed in different orders */}
						<div className="max-w-screen-lg flex xs:flex-col md:flex-row justify-between items-center gap-8">
							<div className="flex flex-col gap-4 items-center justify-center order-2 min-w-[400px] sm:max-w-[550px] md:max-w-[700px]">
								<div className="w-full">
									<h4 className="text-4xl font-bold mt-0 text-center">
										{item?.title}
									</h4>
								</div>
								<div className="px-4">
									<p>{item?.text}</p>
								</div>
							</div>
							<div
								className={`xs:order-3 md:order-${index % 2 === 0 ? 3 : 1}`}>
								<img src={item.image} width="100%" />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
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

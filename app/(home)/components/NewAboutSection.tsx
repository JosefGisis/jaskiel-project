export default function NewAboutSection() {
	return (
		<section id="about-section">
			<div className="lg-container flex flex-col items-center gap-10 my-10">
				<h3 className="text-2xl">
					With all the great real estate agencies out there, why{" "}
					<span className="text-primary text-3xl">
						The Jaskiel Team
					</span>
					?
				</h3>

				<div className="flex flex-col md:flex-row justify-evenly items-center">
					{about.map(({ image, text, title }, index) => (
						<div
							className="flex flex-col md:flex-row items-center h-full"
							key={index}>
							{index !== 0 && (
								<div className="divider divider-primary md:divider-horizontal mx-8">
									<div className="bg-primary rounded-[100vmax] p-3">
										<p className="text-lg text-black">
											and
										</p>
									</div>
								</div>
							)}
							<div className="flex flex-col items-center gap-4 bg-neutral text-black w-[20rem] h-[25rem] rounded-lg p-4">
								<img src={image} className="h-[100px]" />
								<h4 className="text-3xl">{title}</h4>
								<p>{text} </p>
							</div>
						</div>
					))}
				</div>
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
		title: "Experience",
		text: `
			We are The Jaskiel Team, your premier real estate agency serving Lakewood, Jackson, Howell, Toms River and the surrounding communities.
			Founded by the award-winning real estate professional Baila Jackson, our team is dedicated to providing exceptional service and expertise
			in every aspect of the real estate process.
			Our goal is to ensure that every transaction is smooth, stress-free, and rewarding for our clients.
			Whether you're looking to buy your first home, sell your current residence, or invest in real estate, The Jaskiel Team is here to guide 
			you every step of the way.`,
		image: "images/ranking-svgrepo-com.png",
	},
	{
		title: "Commitment",
		text: `
			At The Jaskiel Team, we are proud to set the standard for excellence in real estate sales and client service. 
			We prioritize responsiveness, ensuring that you receive timely and personalized attention.
			We believe that ethical conduct is the cornerstone of trust and reliability in the real estate profession.
			Our unwavering commitment to these ideals enables us to deliver exceptional experiences for our clients and contribute 
			positively to the real estate industry as a whole.
		`,
		image: "images/trophy-svgrepo-com.png",
	},
	{
		title: "Communication",
		text: `
			Whether you're a first-time homebuyer, looking to sell your current property, or seeking investment opportunities, our agents are prepared 
			to assist you at every turn.
 			Our agents are available to communicate with you at your convenience, whether it's during regular business hours or outside 
			of them. We understand the importance of being accessible and responsive to our clients' needs, which is why we strive to 
			maintain open lines of communication throughout your real estate journey.		
		`,
		image: "images/customer-service-svgrepo-com.png",
	},
]

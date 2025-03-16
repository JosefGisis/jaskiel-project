export default function NewAboutSection() {
	// Masks determine the shape for the image masks.
	const masks = ["mask-parallelogram", "mask-parallelogram-2"]

	return (
		<section id="about-section" className="section text-accent">
			<div className="xl-container flex flex-col items-center gap-8">
				{/* initial paragraph */}
				<div className="flex flex-col items-center gap-5 text-center">
					<h3 className="section-title mb-2">Who Are We?</h3>

					<p className="max-w-lg mb-3">
						We are The Jaskiel Team, your premier real estate agency
						serving Lakewood, Jackson, Howell, Toms River and the
						surrounding communities. Founded by the award-winning
						real estate professional Baila Jackson, our team is
						dedicated to providing exceptional service and expertise
						in every aspect of the real estate process.
					</p>
				</div>

				{/* key points in about section */}
				<div className="flex flex-col items-center gap-5">
					<h3 className="section-title">
						Why{" "}
						<span className="section-title-highlight">
							The Jaskiel Team
						</span>
						?
					</h3>

					<div className="flex flex-col justify-between items-start gap-8 lg:gap-0 lg:flex-row">
						{about.map(({ image, text, title }, index) => (
							<div className="flex basis-1/3 flex-col items-center gap-4 p-4">
								{/* image with mask */}
								<img
									src={image}
									// the parallelogram mask changes based on the index
									className={`mask ${index === 0 || index % 2 === 0 ? "mask-parallelogram" : "mask-parallelogram-2"} bg-secondary p-10 h-[175px] lg:h-[200px]`}
								/>

								{/* text section */}
								<div className="flex flex-col gap-4 items-center justify-center max-w-xl">
									<h4 className="text-2xl text-center ">
										{title}
									</h4>
									<p className="text-center">{text} </p>
								</div>
							</div>
						))}
					</div>
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
			The Jaskiel Team has over 12 years experience in the real estate industry, providing clients with expert guidance and support throughout the buying and selling process.`,
		image: "images/house_8857910.png",
	},
	{
		title: "Commitment",
		text: `
			We are committed to providing our clients with the highest level of service and professionalism. The Jaskiel Team ensures that no matter what your real estate needs may be, you always come out the winner.`,
		image: "images/real-estate_602277.png",
	},
	{
		title: "Communication",
		text: `
 			We understand the importance of being accessible and responsive to our clients' needs, which is why we strive to 
			maintain open lines of communication throughout your real estate journey.		
		`,
		image: "images/real-estate-agent_3456999.png",
	},
]

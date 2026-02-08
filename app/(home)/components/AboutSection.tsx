export default function AboutSection() {
	return (
		<section id="about-section" className="section text-accent">
			<div className="xl-container flex flex-col items-center gap-12">
				{/* initial paragraph */}
				<div className="flex flex-col items-center gap-6 text-center">
					<h2 className="section-title">Who Are We?</h2>
					<div className="section-divider" />

					<p className="max-w-lg text-accent/80 leading-relaxed">
						We are The Jaskiel Team, your premier real estate agency
						serving Lakewood, Jackson, Howell, Toms River and the
						surrounding communities. Founded by the award-winning
						real estate professional Baila Jackson, our team is
						dedicated to providing exceptional service and expertise
						in every aspect of the real estate process.
					</p>
				</div>

				{/* key points in about section */}
				<div className="flex flex-col items-center gap-8">
					<h2 className="section-title">
						Why{" "}
						<span className="section-title-highlight">
							The Jaskiel Team
						</span>
						?
					</h2>

					<div className="flex flex-col justify-between items-start gap-10 lg:gap-6 lg:flex-row mt-4">
						{about.map(({ image, text, title }, index) => (
							<div
								key={title}
								className="flex basis-1/3 flex-col items-center gap-5 p-6 group">
								{/* image with mask */}
								<div className="relative">
									<img
										src={image}
										alt={`${title} - The Jaskiel Team`}
										className={`mask ${index === 0 || index % 2 === 0 ? "mask-parallelogram" : "mask-parallelogram-2"} bg-secondary p-10 h-[175px] lg:h-[200px] transition-transform duration-500 group-hover:scale-105`}
									/>
									{/* Subtle gold accent line below image */}
									<div className="w-12 h-[2px] bg-primary/60 mx-auto mt-4 transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
								</div>

								{/* text section */}
								<div className="flex flex-col gap-3 items-center justify-center max-w-xl">
									<h3 className="font-serif text-2xl text-center tracking-tight">
										{title}
									</h3>
									<p className="text-center text-accent/75 leading-relaxed text-[0.95rem]">
										{text}
									</p>
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

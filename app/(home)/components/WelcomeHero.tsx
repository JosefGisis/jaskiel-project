import Link from "next/link"

const backgroundImage = "images/pexels-binyaminmellish-1396122.jpg"

export default function WelcomeHero() {
	return (
		<div
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: "fixed",
			}}
			className="w-full h-[600px] lg:h-[800px] text-accent">
			{/* gradient overlay */}
			<div className="w-full h-full bg-gradient-to-r from-base-100 to-transparent">
				{/* content container */}
				<div className="lg-container h-full flex flex-col items-center justify-center md:items-start">
					{/* this container keeps header on left side of screen */}
					<div className="max-w-md flex flex-col items-center md:items-start gap-6">
						<h1 className="text-3xl md:text-4xl font-bold text-center md:text-start">
							{welcome.title}
						</h1>

						<h6 className="text-lg md:text-xl text-center md:text-start">
							{welcome.subtitle}
						</h6>

						<Link href="/#contact-us">
							<button className="btn btn-primary">
								Contact Us
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export const welcome = {
	title: "Your Dream Home is Closer than You Think!",
	subtitle:
		"The Jaskiel Team is your premiere real estate agency for Lakewood, Jackson, Howell, Toms River, and neighboring communities.",
}

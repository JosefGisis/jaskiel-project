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
			{/* this is an overlay that places a semi-opaque brackground over the image for when the screen gets really small */}
			{/* the reason we do this is to make the text more readable */}
			<div className="bg-base-100/55 sm:bg-base-100/40 md:bg-transparent w-full h-full">
				{/* gradient overlay */}
				<div className="w-full h-full bg-gradient-to-r from-base-100 to-transparent">
					{/* content container */}
					<div className="lg-container h-full flex flex-col items-center justify-center sm:items-start">
						{/* this container keeps header on left side of screen */}
						<div className="max-w-md flex flex-col items-center sm:items-start gap-6">
							<h1 className="text-2xl md:text-3xl lg:text-4xl text-center sm:text-start">
								{welcome.title}
							</h1>

							<h6 className="text-md sm:text-lg md:text-xl text-center sm:text-start">
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
		</div>
	)
}

export const welcome = {
	title: "Your Dream Home is Closer than You Think!",
	subtitle:
		"The Jaskiel Team is your premiere real estate agency for Lakewood, Jackson, Howell, Toms River, and neighboring communities.",
}

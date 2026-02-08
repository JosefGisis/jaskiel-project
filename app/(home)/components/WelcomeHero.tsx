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
			className="w-full h-[560px] lg:h-[680px] text-accent relative">
			{/* this is an overlay that places a semi-opaque background over the image for when the screen gets really small */}
			{/* the reason we do this is to make the text more readable */}
			<div className="bg-base-100/60 sm:bg-base-100/40 md:bg-transparent w-full h-full">
				{/* gradient overlay */}
				<div className="w-full h-full bg-gradient-to-r from-base-100 via-base-100/70 to-transparent">
					{/* content container */}
					<div className="lg-container h-full flex flex-col items-center justify-center sm:items-start">
						{/* this container keeps header on left side of screen */}
						<div className="max-w-lg flex flex-col items-center sm:items-start gap-7">
							{/* Small label above the title */}
							<span className="text-primary font-sans text-xs tracking-widest-xl uppercase font-medium">
								Premier Real Estate
							</span>

							<h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center sm:text-start leading-tight tracking-tight">
								{welcome.title}
							</h1>

							<p className="text-base sm:text-lg md:text-xl text-center sm:text-start leading-relaxed text-accent/80">
								{welcome.subtitle}
							</p>

							<Link href="/#contact-us">
								<button className="btn btn-primary text-black font-sans font-medium tracking-wider uppercase text-sm px-8 py-3 rounded-none border-0 hover:bg-primary/90 transition-all duration-300 mt-2">
									Contact Us
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative bottom border */}
			<div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />
		</div>
	)
}

export const welcome = {
	title: "Your Dream Home is Closer than You Think",
	subtitle:
		"The Jaskiel Team is your premiere real estate agency for Lakewood, Jackson, Howell, Toms River, and neighboring communities.",
}

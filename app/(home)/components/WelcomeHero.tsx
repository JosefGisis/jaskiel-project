import Link from "next/link"

const backgroundImage = "images/pexels-binyaminmellish-1396122.jpg"

export default function WelcomeHero() {
	return (
		<div className="welcome-hero w-full xs:h-[800px] sm:h-[900px] flex items-center justify-start text-black">
			{/* gradient overlay. This becomes active on smaller screens for better text contrast */}
			<div className="w-full h-full bg-gradient-to-r from-white to-transparent">
				{/* linear gradient layer */}
				<div
					style={{
						width: "100%",
						height: "100%",
						background: `linear-gradient(to right, white, transparent)`,
					}}>
					{/* content container */}
					<div className="max-w-screen-lg w-full h-full flex flex-col justify-center items-start">
						{/* this container keeps header on left side of screen */}
						<div
							style={{
								maxWidth: "30rem",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "start",
								gap: "1.5rem",
							}}>
							<h1 className="text-4xl font-bold">
								{welcome.title}
							</h1>

							<h6 className="text-lg">{welcome.subtitle}</h6>

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

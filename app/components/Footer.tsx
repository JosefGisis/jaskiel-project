import Link from "next/link"

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"
import { SiZillow } from "react-icons/si"

import type { LinkType } from "../types"

export default function Footer() {
	const contactLinks: (LinkType & { icon: React.ReactNode })[] = [
		{ label: "848-223-2295", href: "tel:8482232295", icon: <FiPhone /> },
		{
			label: "bjaskiel@gmail.com",
			href: "mailto:bjaskiel@gmail.com",
			icon: <FiMail />,
		},
		{
			label: "353 N County Line Rd, Jackson Township, NJ 08527",
			href: "https://www.google.com/maps/place/Keller+Williams+Monmouth%2FOcean+-+John+Meeker/@40.13925,-74.3017685,17z/data=!3m1!4b1!4m6!3m5!1s0x89c17f46cf372a79:0xffc481e5d2923c3c!8m2!3d40.13925!4d-74.3017685!16s%2Fg%2F11g1ppy0vt?entry=ttu",
			icon: <FiMapPin />,
		},
		{
			label: "Zillow @bjaskiel",
			href: "https://www.zillow.com/profile/bjaskiel",
			icon: <SiZillow />,
		},
	]

	return (
		<footer
			id="footer"
			className="bg-black text-white/90 w-full max-w-full"
			role="contentinfo">
			{/* Decorative top border */}
			<div className="h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

			<div className="xl-container">
				{/* responsive flex is not currently used */}
				<div className="flex gap-10 xs:flex-col justify-between mt-16">
					<div
						id="business-links"
						className="flex flex-col md:flex-row md:justify-between w-full gap-12">
						{/* logo and home page links */}
						<div className="flex flex-col gap-10">
							{/* logos */}
							<div className="flex flex-col justify-start items-start lg:flex-row lg:items-center gap-8 lg:gap-10">
								{/* jaskiel team logo */}
								<Link href="/">
									<img
										src="/logos/jaskiel-badge.png"
										alt="The Jaskiel Team badge logo"
										className="h-[140px] transition-opacity duration-300 hover:opacity-80"
									/>
								</Link>

								{/* divider. Only shows up on wider screens where the logos are side-by-side */}
								<div
									className="w-[0.5px] h-24 bg-primary/30 hidden lg:block"
									aria-hidden="true"
								/>

								{/* keller williams logo */}
								<a
									href="https://www.kw.com/"
									rel="noopener noreferrer"
									target="_blank"
									className="transition-opacity duration-300 hover:opacity-80">
									<img
										src="logos/updated-keller-williams.png"
										alt="Keller Williams Realty logo"
										className="w-[350px] max-w-[95%]"
									/>
								</a>
							</div>

							{/* subdivision of Keller Williams Realty */}
							<div className="flex flex-col gap-2">
								<div className="flex gap-4 items-center">
									<p className="text-xs text-white/50">
										Each Keller Williams office is
										independently owned & operated.
									</p>

									<img
										src="/logos/Equal_Housing_Opportunity_White.png"
										alt="Equal Housing Opportunity"
										className="h-10 opacity-70"
									/>

									<img
										src="/logos/RealtorMLS_Logo_White.png"
										alt="Realtor MLS"
										className="h-10 opacity-70"
									/>
								</div>

								<p className="text-xs text-white/40">
									KW Office:{" "}
									<a
										href="tel:7329425280"
										className="text-white/50 hover:text-primary transition-colors duration-300 hover:underline underline-offset-2">
										732-942-5280
									</a>
								</p>
							</div>
						</div>

						<nav
							className="flex flex-col gap-5"
							aria-label="Contact information">
							<h3 className="font-serif text-lg text-primary/80 mb-1">
								Contact
							</h3>
							{contactLinks.map(
								({ label, href, icon }, index) => (
									<div
										key={`${index}-${href}`}
										className="flex gap-3 items-center text-sm text-white/60 hover:text-primary transition-colors duration-300">
										<span
											aria-hidden="true"
											className="text-primary/50">
											{icon}
										</span>

										<a
											className="hover:underline underline-offset-2"
											href={href}
											{...(href.startsWith("http")
												? {
														rel: "noopener noreferrer",
														target: "_blank",
													}
												: {})}>
											{label}
										</a>
									</div>
								)
							)}
						</nav>
					</div>
				</div>

				{/* Subtle divider */}
				<div className="w-full h-[1px] bg-white/10 mt-14 mb-6" />

				<p className="mb-10 text-center text-white/40 text-sm">
					&copy; {new Date().getFullYear()} The Jaskiel Team &mdash;
					Jackson, NJ 08527
				</p>
			</div>
		</footer>
	)
}

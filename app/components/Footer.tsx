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
		<div id="footer" className="bg-black text-white w-screen">
			<div className="xl-container">
				{/* responsive flex is not currently used */}
				<div className="flex gap-10 xs:flex-col justify-between mt-14">
					<div
						id="business-links"
						className="flex flex-col md:flex-row md:justify-between w-full gap-10">
						{/* logo and home page links */}
						<div className="flex flex-col gap-8">
							{/* logos */}
							<div className="flex flex-col justify-start items-start lg:flex-row lg:items-center gap-6 lg:gap-10">
								{/* jaskiel team logo */}
								<Link href="/">
									<img
										src="/logos/jaskiel-badge.png"
										className="h-[150px]"
									/>
								</Link>

								{/* divider. Only shows up on wider screens where the logos are side-by-side */}
								<div className="w-[0.5px] h-24 bg-white opacity-70 hidden lg:visible" />

								{/* keller williams logo */}
								<a href="https://www.kw.com/">
									<img
										src="logos/updated-keller-williams.png"
										className="h-[75px] max-w-[75%]"
									/>
								</a>
							</div>

							{/* subdivision of Keller Williams Realty */}
							<p className="text-xs mb-6">
								The Jaskiel Team is a subdivision of Keller
								Williams Realty
							</p>
						</div>

						<div className="flex flex-col gap-6">
							{contactLinks.map(
								({ label, href, icon }, index) => (
									<div
										key={`${index}-${href}`}
										className="flex gap-2">
										{icon}

										<a
											className="link link-hover"
											href={href}>
											{label}
										</a>
									</div>
								)
							)}
						</div>
					</div>
				</div>

				<p className="my-14 text-center text-white">
					©️ 2024 The Jaskiel Team - Jackson, NJ 08527
				</p>
			</div>
		</div>
	)
}

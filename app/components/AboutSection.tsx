import { Box, Container, Typography } from "@mui/material"

export default function AboutSection() {
	return (
		<section
			id="about-detailed"
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginBottom: "4rem",
				paddingBottom: "4rem",
			}}>
			<Container maxWidth="lg">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "3rem",
						}}>
						{aboutContent.map((item, index) => (
							<Box
								key={index}
								sx={{
									display: "flex",
									flexDirection: {
										xs: "column",
										md: "row",
									},
									gap: "3rem",
									order: 1,
								}}>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "1rem",
										alignItems: "center",
										order: 2,
									}}>
									<div
										style={{
											padding: "1rem",
											width: "100%",
											marginBottom: "1rem",
											background: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6) )`,
										}}>
										<Typography
											variant="h4"
											textAlign="center">
											{item?.title}
										</Typography>
									</div>

									<div style={{ paddingInline: 15 }}>
										<Typography variant="body1">
											{item?.text}
										</Typography>
									</div>
								</div>
								<Box
									sx={{
										order: {
											xs: 3,
											// alternate order of image and text on md screens
											md: index % 2 === 0 ? 3 : 1,
										},
									}}>
									<img
										src={item.image}
										width="460"
										height="307"
									/>
								</Box>
							</Box>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}

const aboutContent = [
	{
		title: "Expertine and Commitment",
		text: "The JaskialTeam stands at the forefront of the real estate industry, blending unmatched expertise with unwavering dedication to our clients' success. Our team comprises seasoned professionals who are not just agents but advisors, guiding buyers and sellers through every step of the process with precision and care. We pride ourselves on our deep understanding of the market, leveraging cutting-edge tools and strategies to navigate even the most complex transactions smoothly.",
		image: "images/pexels-binyaminmellish-1396122.jpg",
	},
	{
		title: "Client-Centric Approach",
		text: "At the heart of the JaskialTeam lies a profound commitment to putting our clients first. We believe in fostering long-term relationships built on trust, transparency, and exceptional service. Whether you're looking to buy your dream home or sell your current one, our team works tirelessly to exceed expectations, ensuring a stress-free experience that reflects your unique needs and goals. We're not just in the business of selling properties; we're in the business of creating memories and building futures.",
	},
	{
		title: "Innovative Solutions",
		text: "In an ever-evolving real estate landscape, the JaskialTeam remains ahead of the curve, offering innovative solutions that set us apart. From utilizing advanced technology to stay ahead of market trends to implementing creative marketing strategies that maximize property exposure, we're constantly evolving to meet the demands of today's dynamic market. Our goal is not just to facilitate transactions but to revolutionize the way people buy and sell homes, making the journey as rewarding and seamless as possible.",
		image: "images/pexels-binyaminmellish-1396122.jpg",
	},
]

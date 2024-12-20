export default function AboutSection() {
	// return (
	// 	<section>
	// 		<div
	// 			style={{
	// 				display: "flex",
	// 				flexDirection: "column",
	// 				alignItems: "center",
	// 			}}>
	// 			{/* card background color is determined by index */}
	// 			{about.map((item, index) => (
	// 				<
	// 					key={index}
	// 					sx={{
	// 						width: "100%",
	// 						// background:
	// 						// 	(index + 1) % 2 === 0
	// 						// 		? "black"
	// 						// 		: (index + 1) % 3 === 0
	// 						// 			? neutral
	// 						// 			: "white",
	// 						// color: (index + 1) % 2 === 0 ? "white" : "black",
	// 						// paddingBlock: "70px",
	// 					}}>
	// 					{/* depending on screen width the image and text is displayed in different orders */}
	// 					<Container
	// 						maxWidth="lg"
	// 						sx={{
	// 							display: "flex",
	// 							flexDirection: {
	// 								xs: "column",
	// 								md: "row",
	// 							},
	// 							justifyContent: {
	// 								xs: "center",
	// 								md: "space-between",
	// 							},
	// 							alignItems: "center",
	// 							gap: "2rem",
	// 						}}>
	// 						<Box
	// 							sx={{
	// 								display: "flex",
	// 								flexDirection: "column",
	// 								gap: "1rem",
	// 								alignItems: "center",
	// 								justifyContent: "center",
	// 								order: 2,
	// 								minWidth: "400px",
	// 								maxWidth: { xs: "550px", md: "700px" },
	// 							}}>
	// 							<div
	// 								style={{
	// 									width: "100%",
	// 									marginBottom: "",
	// 								}}>
	// 								<Typography
	// 									variant="h4"
	// 									marginTop="0px"
	// 									textAlign="center">
	// 									{item?.title}
	// 								</Typography>
	// 							</div>
	// 							<div style={{ paddingInline: 15 }}>
	// 								<Typography variant="subtitle1">
	// 									{item?.text}
	// 								</Typography>
	// 							</div>
	// 						</Box>
	// 						<Box
	// 							sx={{
	// 								order: {
	// 									xs: 3,
	// 									// alternate order of image and text on md screens
	// 									md: index % 2 === 0 ? 3 : 1,
	// 								},
	// 							}}>
	// 							<img src={item.image} width="100%" />
	// 						</Box>
	// 					</Container>
	// 				</Box>
	// 			))}
	// 		</div>
	// 	</section>
	// )
}

interface AboutType {
	title: string
	text: string
	image: string
}
export const about: AboutType[] = [
	{
		title: "Who We Are",
		text: `
			We are The Jaskiel Team, your premier real estate agency serving Lakewood, Jackson, Howell, Toms River and the surrounding communities.
			Founded by the award-winning real estate professional Baila Jackson, our team is dedicated to providing exceptional service and expertise
			in every aspect of the real estate process.
			Our goal is to ensure that every transaction is smooth, stress-free, and rewarding for our clients.
			Whether you're looking to buy your first home, sell your current residence, or invest in real estate, The Jaskiel Team is here to guide 
			you every step of the way.`,
		image: "images/pexels-pavel-danilyuk-7937225.jpg",
	},
	{
		title: "Commitment to Excellence",
		text: `
			At The Jaskiel Team, we are proud to set the standard for excellence in real estate sales and client service. 
			We prioritize responsiveness, ensuring that you receive timely and personalized attention.
			We believe that ethical conduct is the cornerstone of trust and reliability in the real estate profession.
			Our unwavering commitment to these ideals enables us to deliver exceptional experiences for our clients and contribute 
			positively to the real estate industry as a whole.
		`,
		image: "images/pexels-karolina-grabowska-5398881.jpg",
	},
	{
		title: "Communication and Guidance",
		text: `
			Whether you're a first-time homebuyer, looking to sell your current property, or seeking investment opportunities, our agents are prepared 
			to assist you at every turn.
 			Our agents are available to communicate with you at your convenience, whether it's during regular business hours or outside 
			of them. We understand the importance of being accessible and responsive to our clients' needs, which is why we strive to 
			maintain open lines of communication throughout your real estate journey.		
		`,
		image: "images/pexels-pixabay-261621.jpg",
	},
]

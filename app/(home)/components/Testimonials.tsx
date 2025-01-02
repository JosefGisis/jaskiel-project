export default function Testimonials() {
	return <div>hello</div>
	// return (
	// 	<section style={{ paddingBlock: "3rem" }}>
	// 		<Container maxWidth="lg">
	// 			{/* responsive grid */}
	// 			<Grid2
	
	// 				container
	// 				rowSpacing={5}
	// 				columnSpacing={4}
	// 				justifyItems="center">
	// 				<Grid2 xs={12} md={6}>
	// 					<Typography
	// 						variant="h3"
	// 						textAlign="center"
	// 						gutterBottom
	// 						marginBottom="1.5rem">
	// 						What Our Clients Say
	// 					</Typography>
	// 					<Typography variant="h6" textAlign="center">
	// 						Our clients are our biggest supporters. Check out
	// 						our{" "}
	// 						<Link href="https://www.zillow.com/profile/bjaskiel">
	// 							Zillow page
	// 						</Link>{" "}
	// 						to see a full listing of our testimonials.
	// 					</Typography>
	// 				</Grid2>
	// 				{/* map through testimonials */}
	// 				{testimonials.map((testimonial, index) => (
	// 					<Grid2 key={index} xs={12} sm={6}>
	// 						<div>
	// 							<Typography
	// 								fontStyle="oblique"
	// 								variant="subtitle1"
	// 								gutterBottom>
	// 								"{testimonial.text}"
	// 							</Typography>
	// 							<Typography
	// 								textAlign="right"
	// 								variant="h6"
	// 								gutterBottom>
	// 								- {testimonial.name}
	// 							</Typography>
	// 						</div>
	// 					</Grid2>
	// 				))}
	// 			</Grid2>
	// 		</Container>
	// 	</section>
	// )
}

export const testimonials: { text: string; name: string }[] = [
	{
		text: `
			Baila really cares about her clients and goes way beyond the call of duty to help her
			clients out. Baila is honest, kind and responsive. Multiple times she advised against
			buying a home which in retrospect we agreed would have been a poor purchase. She
			gave us hours of time on the phone despite her busy schedule. We always knew she
			had our best interest in mind. Baila reached out to me months after closing to give me
			advice on re-financing my home so that I could save more on my mortgage. That's just
			one example of her dedication, honesty and focus on her clients.
		`,
		name: "Tzipora D.",
	},
	{
		text: `
			Baila is a one of a kind realtor who really cares! She got to know all our 
			likes and dislikes and worked tirelessly to find us our perfect home with endless 
			patience and availability and never any pressure. Her extensive knowledge made looking 
			and actually purchasing a pleasure!
		`,
		name: "Abraham A.",
	},
	{
		text: `
			Ms. Jaskiel was attentive, responsive, and calm. She was a great negotiator and was 
			there for us from showing to closing. She even followed up after we had moved in to check 
			in how the house was and if there were any further issues. Highly recommended!
		`,
		name: "Jonathan M.",
	},
	{
		text: `
			Baila is an energetic real estate professional, who was attentive to our needs and a
			pleasure to work with. She communicated daily and very knowledgeable, and has a
			good relationship with other realtors. She often bent her schedule to make it work for
			our schedule. I would highly recommend Baila for buying or selling a home!
		`,
		name: "Brocha H.",
	},
]

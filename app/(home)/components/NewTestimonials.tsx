import Link from "next/link"

export default function NewTestimonials() {
	return (
		<section style={{ paddingBlock: "3rem" }} className="w-full bg-neutral">
			<div className=" grid grid-cols-2 gap-4 justify-items-center">
				<h3 className="text-2xl text-center mb-4">
					What Our Clients Say
				</h3>
				<h6 className="text-lg text-center">
					Our clients are our biggest supporters. Check out our{" "}
					<Link href="https://www.zillow.com/profile/bjaskiel">
						Zillow page
					</Link>{" "}
					to see a full listing of our testimonials.
				</h6>
				{testimonials.map((testimonial, index) => (
					<div key={index}>
						<p className="italic">{testimonial.text}</p>
						<p className="text-right">{testimonial.name}</p>
					</div>
				))}
			</div>
		</section>
	)
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

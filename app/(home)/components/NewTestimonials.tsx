import Link from "next/link"

export default function NewTestimonials() {
	const TestimonialHeader = (
		<h3 className="section-title">What Our Clients Say</h3>
	)

	const TestimonialSubheader = (
		<div className="px-20">
			<h4 className="section-subtitle">
				Our clients are our biggest supporters. Check out our{" "}
				<Link
					href="https://www.zillow.com/profile/bjaskiel"
					className="link link-hover font-semibold">
					Zillow
				</Link>{" "}
				page to see a full listing of our testimonials.
			</h4>
		</div>
	)
	const TestimonyCarousel = (
		<div className="flex flex-col w-full items-center gap-5">
			<div className="xl-container flex flex-col w-full gap-5 items-center justify-center px-20">
				{TestimonialHeader}
				{TestimonialSubheader}
			</div>

			<div className="h-[25rem] w-screen relative">
				<div
					className={`carousel carousel-center rounded-box max-w-full space-x-5 py-4 w-full h-full px-20`}>
					{testimonials.map(({ text, name }, index) => (
						<div
							key={index}
							id={`item${index + 1}`}
							className="carousel-item relative max-w-sm w-full h-full">
							<div className="card bg-white shadow-lg border-[1px] border-secondary">
								<div className="card-body h-full flex flex-col gap-5 p-8 text-black">
									<p className="text-md text-justify max-h-[80%] overflow-auto">
										{text}
									</p>
									<div className="flex w-full justify-end">
										<i className="text-lg">- {name}</i>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div
					className={`w-20 absolute left-0 top-0 bottom-0 bg-gradient-to-r from-neutral to-transparent`}
				/>
				<div
					className={`w-20 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-neutral to-transparent`}
				/>
			</div>
		</div>
	)

	const TestimonyGrid = (
		<div className="xl-container grid grid-cols-2 grid-auto-columns:minmax(0, 1fr) gap-10 justify-items-center py-2">
			<div className="flex flex-col gap-8 items-center justify-center">
				{TestimonialHeader}
				{TestimonialSubheader}
			</div>
			{testimonials.map(({ name, text }, index) => (
				<div
					key={index}
					className="flex flex-col gap-5 px-2 text-black">
					<p>"{text}"</p>
					<div className="w-full flex justify-end">
						<i className="text-lg mr-6">- {name}</i>
					</div>
				</div>
			))}
		</div>
	)

	return (
		<section id="testimonials-section" className="section">
			<div className="w-full bg-neutral flex flex-col items-center justify-center py-12">
				<div className="md:hidden w-full">{TestimonyCarousel}</div>
				<div className="hidden md:block w-full">{TestimonyGrid}</div>
			</div>
		</section>
	)
}

export const testimonials: { text: string; name: string }[] = [
	{
		text: `Baila is a one of a kind realtor who really cares! She got to know all our 
		likes and dislikes and worked tirelessly to find us our perfect home with endless 
			patience and availability and never any pressure. Her extensive knowledge made looking 
			and actually purchasing a pleasure!`,
		name: "Abraham A.",
	},
	{
		text: `Ms. Jaskiel was attentive, responsive, and calm. She was a great negotiator and was 
			there for us from showing to closing. She even followed up after we had moved in to check 
			in how the house was and if there were any further issues. Highly recommended!`,
		name: "Jonathan M.",
	},
	{
		text: `Baila is an energetic real estate professional, who was attentive to our needs and a
			pleasure to work with. She communicated daily and very knowledgeable, and has a
			good relationship with other realtors. She often bent her schedule to make it work for
			our schedule. I would highly recommend Baila for buying or selling a home!`,
		name: "Brocha H.",
	},
	{
		text: `From our initial phone call with Malka Rivka and Baila, we knew we were in good hands. It was so enjoyable to work with someone who really understood our needs and wants. They worked so hard to make this transaction smooth and enjoyable. We are extremely grateful for all they did for us.`,
		name: "T. P.",
	},
	{
		text: `Working with Esther and Baila to sell our home and buy a new one was such a seamless process from beginning to end. They treated us with such care and held our hands every step of the way. Even though we know how busy they are, we felt like we were their top priority. We will definitely work with them again!`,
		name: "Jacob E.",
	},
	{
		text: `Baila and her team did an amazing job with the sale of my home. As we all know selling a home can be stressful and there are many unknowns throughout the process. She was responsive and passionate to all my questions and provided guidance when I was lost.`,
		name: "Mike C.",
	},
	{
		text: `Baila really cares about her clients and goes way beyond the call of duty to help her
			clients out. Baila is honest, kind and responsive. Multiple times she advised against
			buying a home which in retrospect we agreed would have been a poor purchase. She
			gave us hours of time on the phone despite her busy schedule. We always knew she
			had our best interest in mind. Baila reached out to me months after closing to give me
			advice on re-financing my home so that I could save more on my mortgage. That's just
			one example of her dedication, honesty and focus on her clients.`,
		name: "Tzipora D.",
	},
	{
		text: `We had an incredible experience working with Dina and Baila. Their in-depth knowledge of the local market, excellent communication throughout the process, and tireless dedication made the entire journey stress-free.`,
		name: "D. S.",
	},
	{
		text: `It was such a pleasure to work with Kelly from contract to close. She gave us so much time and attention. We really appreciate all her care and devotion.`,
		name: "A. L.",
	},
]

import { BsSendCheck } from "react-icons/bs"

export default function ({
	setCompleted,
}: {
	setCompleted: (completed: boolean) => void
}) {
	return (
		<div className="xl-container flex flex-col items-center gap-8 !text-black">
			<BsSendCheck className="text-6xl text-primary" />

			<div className="p-2">
				<h4 className="section-title !text-black">
					Thank you for reaching out to us!
				</h4>
			</div>
			<p className="section-subtitle !text-black">
				We have received your message and will get back to you as soon
				as possible.
			</p>
			<div className="flex justify-center mb-16 mx-auto">
				<button
					onClick={() => setCompleted(false)}
					className="btn btn-secondary">
					Send another message
				</button>
			</div>
		</div>
	)
}

export default function ({
	setCompleted,
}: {
	setCompleted: (completed: boolean) => void
}) {
	return (
		<div>
			<div className="mb-6 p-2">
				<h4 className="text-center text-xl">
					Thank you for reaching out to us!
				</h4>
			</div>
			<p className="text-center text-lg mb-6">
				We have received your message and will get back to you as soon
				as possible.
			</p>
			<div className="flex justify-center mb-16 mx-auto">
				<button
					onClick={() => setCompleted(false)}
					className="btn btn-primary btn-outline">
					Send another message
				</button>
			</div>
		</div>
	)
}

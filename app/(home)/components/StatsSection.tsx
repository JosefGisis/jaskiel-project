import { LiaAwardSolid } from "react-icons/lia"
import { LiaHomeSolid } from "react-icons/lia"
import { LiaMoneyBillWaveSolid } from "react-icons/lia"

export default function StatsSection() {
	return (
		<section
			id="stats-section"
			className="section text-accent relative overflow-hidden">
			{/* Subtle background texture */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

			<div className="lg-container flex flex-col items-center gap-12 relative z-10">
				<div className="flex flex-col items-center gap-4">
					<h2 className="section-title">
						<span className="section-title-highlight">
							The Jaskiel Team&apos;s
						</span>{" "}
						2024 Achievements
					</h2>
					<div className="section-divider" />
				</div>

				<div className="flex flex-col lg:flex-row w-full items-center justify-around gap-8 lg:gap-4">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="flex flex-col items-center gap-3 basis-1/3 max-w-sm text-center group">
							{/* Icon */}
							{stat.icon && (
								<div className="text-primary mb-2 transition-transform duration-500 group-hover:scale-110">
									{stat.icon}
								</div>
							)}

							{/* Big number */}
							<div className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-primary font-bold">
								{stat.type === "dollars"
									? `$${(stat.value / 1000000).toFixed(0)}M+`
									: stat.type === "rank"
										? `#${stat.value}`
										: stat.value.toLocaleString()}
							</div>

							{/* Label */}
							<div className="text-xs font-sans uppercase tracking-widest-xl text-accent/50 font-medium">
								{stat.title}
							</div>

							{/* Description */}
							<p className="text-sm text-accent/65 leading-relaxed max-w-xs mt-1">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

type StatType = "rank" | "quantity" | "dollars"

const stats: {
	title: string
	label: string
	value: number
	type: StatType
	icon?: JSX.Element
}[] = [
	{
		title: "Units",
		label: "The Jaskiel Team sold 84 homes in 2024",
		value: 84,
		type: "quantity",
		icon: <LiaHomeSolid size={48} />,
	},
	{
		title: "Ranked",
		value: 1,
		label: "Baila Jaskiel earned top real estate agent for Keller William Monmouth/Ocean county",
		type: "rank",
		icon: <LiaAwardSolid size={48} />,
	},
	{
		title: "Sales",
		label: "The Jaskiel Team sold over $59M in real estate in 2024",
		value: 59293206,
		type: "dollars",
		icon: <LiaMoneyBillWaveSolid size={48} />,
	},
]

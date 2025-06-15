import { LiaAwardSolid } from "react-icons/lia"
import { LiaHomeSolid } from "react-icons/lia"

export default function StatsSection() {
	return (
		<section id="stats-section" className="section text-accent my-5">
			<div className="lg-container flex flex-col items-center gap-8">
				<h4 className="section-title mb-4">
					<span className="section-title-highlight">
						The Jaskiel Team's
					</span>{" "}
					2024 Achievements
				</h4>
				<div className="flex flex-col lg:flex-row w-full items-start lg:items-center justify-around">
					{stats.map((stat, index) => (
						<div
							key={index}
							className={`stat basis-1/3 max-w-lg mx-auto ${
								index % 3 === 0
									? "text-secondary"
									: index % 3 === 1
										? "text-primary"
										: "text-base-content"
							}`}>
							{stat.icon && (
								<div className="stat-figure">{stat.icon}</div>
							)}
							<div className="stat-title">{stat.title}</div>
							<div className="stat-value">
								{stat.type === "dollars"
									? `$${stat.value.toLocaleString()}`
									: stat.type === "rank"
										? `#${stat.value}`
										: stat.value.toLocaleString()}
							</div>
							<div className="stat-desc text-wrap">
								{stat.label}
							</div>
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
		icon: <LiaHomeSolid size={40} />,
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
		// icon: <LiaMoneyBillWaveSolid size={40} />,
	},
]

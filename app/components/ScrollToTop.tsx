"use client"

// Not used currently

import { useEffect, useState } from "react"

export default function ScrollToTop() {
	const [scrolling, setScrolling] = useState(false)

	useEffect(() => {
		const onscroll = () => {
			if (window.scrollY > 700) {
				setScrolling(true)
			} else {
				setScrolling(false)
			}
		}
		window.addEventListener("scroll", onscroll)
		return () => {
			window.removeEventListener("scroll", onscroll)
		}
	}, [])

	// return (
	// <Box
	// 	onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
	// 	sx={{
	// 		position: "fixed",
	// 		bottom: scrolling ? "-1px" : "-6rem",
	// 		right: "5%",
	// 		paddingTop: "0.3rem",
	// 		paddingInline: "0.5rem",
	// 		zIndex: 1000,
	// 		background: "rgba(43, 67, 107, 0.7)",
	// 		"&:hover": { background: primary },
	// 		color: "white",
	// 		borderTopLeftRadius: 6,
	// 		borderTopRightRadius: 6,
	// 		borderLeft: `1px solid ${accent}`,
	// 		borderRight: `1px solid ${accent}`,
	// 		borderTop: `1px solid ${accent}`,
	// 		transition: "bottom 0.5s ease-in-out",
	// 	}}>
	// 	<HomeIcon
	// 		sx={{ width: "2.2rem", height: "2.2rem", color: accent }}
	// 	/>
	// 	{/* <KeyboardArrowUpIcon sx={{ width: "2.5rem", height: "2.5rem" }} /> */}
	// </Box>
	// )
}

import React from 'react'
import Image from "next/image";

const ForBusiness = () => {

	const businessCard = [{
		imageUrl: "/consulting.jpg",
		alt: "Make Money",
		title: "Corporate Training & Coaching",
		description: "Equip your workforce with the essential digital skills needed to thrive in today's online world",
		button: "Get started",
		id: 1,
	},
	{
		imageUrl: "/home1-slider1-2.jpg",
		alt: "Likes",
		title: "Full Social Media Management",
		description: "For dedicated and ambitious entrepreneurs looking to hand over their social media to an expert team.",
		button: "Shop Now",
		id: 2,
	},
	{
		imageUrl: "/team_engage.jpg",
		alt: "Skills",
		title: "Speaking & Events",
		description: "Elevate your events with engaging and insightful talks from our seasoned social media experts.",
		button: "Get in touch",
		id: 3,
	},
	{
		imageUrl: "/corporate_engage.jpg",
		alt: "Grow",
		title: "Digital Literacy Programs",
		description: "Designed to equip underprivileged youth with the skills to succeed in the digital world.",
		button: "Sign up",
		id: 4,
	},
]
	return (
		<div className="relative h-80 m-4 grid grid-cols-1 md:grid-cols-4 justify-center items-center rounded-lg gap-4">
			{businessCard.map((item) => (
				<div key={item.id} className="flex rounded-xl text-center shadow-violet-400/50 shadow-lg p-2 gap-6 flex-col justify-center items-center overflow-x-0 bg-linear-to-b from-white to-pink-50 w-full">
					<Image src={item.imageUrl} alt={item.alt} width={400} height={200} className="rounded-md w-full shadow-lg hover:scale-105 transition-all duration-200 shadow-violet-400/30"/>
					<h1>{item.title}</h1>
					<p>{item.description}</p>
					<button onClick={() => {}} type={"button"} className="border my-2 px-3 py-2 rounded-sm bg-pink-400/90 text-slate-800 hover:scale-105 hover:bg-pink-500 hover:text-slate-200 transition-all duration-200 hover:shadow-pink-500 hover:shadow-sm hover:border-pink-500 border-pink-300 text-center">{item.button}</button>
				</div>
			))}
		</div>
	)
}
export default ForBusiness

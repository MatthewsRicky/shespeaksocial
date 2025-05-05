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
		<div className="m-4 w-full grid grid-cols-1 md:grid-cols-2 md:w-[80%] justify-center items-center rounded-lg gap-12">
			{businessCard.map((item) => (
				<div key={item.id} className="flex rounded-xl lg:h-fit text-center shadow-violet-400/50 shadow-lg gap-6 flex-col justify-center items-center overflow-none bg-linear-to-b from-violet-50 to-violet-100 h-full w-[80%] mx-auto">
					<Image src={item.imageUrl} alt={item.alt} width={400} height={400} className="flex cover shadow-lg w-full hover:scale-105 transition-all duration-200 shadow-violet-400/30"/>
					<h1 className="text-center font-medium uppercase text-sm p-1 shadow-sm mx-3 rounded-md text-slate-900 shadow-violet-300">{item.title}</h1>
					<p className="font-normal text-center p-2 mx-2 text-sm">{item.description}</p>
					<button onClick={() => {}} type={"button"} className="border my-2 px-3 py-2 rounded-sm bg-deep-pink hover:bg-deep-pink/70  text-white hover:scale-105  hover:text-slate-900 transition-all duration-200 hover:shadow-pink-500 hover:shadow-sm hover:border-pink-500 border-pink-300 text-center">{item.button}</button>
				</div>
			))}
		</div>
	)
}
export default ForBusiness

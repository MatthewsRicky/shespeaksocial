import React from 'react'
import Image from "next/image";

const ForBusiness = () => {

	const businessCard = [{
		imageUrl: "/consulting.jpg",
		title: "Corporate Training & Coaching",
		description: "Equip your workforce with the essential digital skills needed to thrive in today's online world",
		button: "Get started",
		id: 1,
	},
	{
		imageUrl: "/social-media-mgt.png",
		title: "Full Social Media Management",
		description: "For dedicated and ambitious entrepreneurs looking to hand over their social media to an expert team.",
		button: "Shop Now",
		id: 2,
	},
	{
		imageUrl: "/team_engage.jpg",
		title: "Speaking & Events",
		description: "Elevate your events with engaging and insightful talks from our seasoned social media experts.",
		button: "Get in touch",
		id: 3,
	},
	{
		imageUrl: "/corporate_engage.jpg",
		title: "Digital Literacy Programs",
		description: "Designed to equip underprivileged youth with the skills to succeed in the digital world.",
		button: "Sign up",
		id: 4,
	},
]
	return (
		<div className="w-full min-h-full p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 ">
			{businessCard.map((item) => (
				<div key={item.id} className="flex text-center shadow-violet-400/50 shadow-lg p-4 m-8s gap-6 flex-col justify-center items-center overflow-x-0">
					<Image src={item.imageUrl} alt="Consulting" width={400} height={400} className="w-full rounded-lg shadow-md shadow-violet-400/30 m-4"/>
					<h1>{item.title}</h1>
					<p>{item.description}</p>
					<button onClick={() => {}} type={"button"}>{item.button}</button>
				</div>
			))}
		</div>
	)
}
export default ForBusiness

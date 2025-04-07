import React from 'react'
import Image from "next/image";

const ForBusiness = () => {

	const businessCard = [{
		imageUrl: "/consulting.jpg",
		title: "Corporate Training & Coaching",
		description: "Equip your workforce with the essential digital skills needed to thrive in today's online world",
		button: "Get started",
		id: 1,
	},{
		imageUrl: "/social-media-mgt.png",
		title: "Full Social Media Management",
		description: "For dedicated and ambitious entrepreneurs looking to hand over their social media to an expert team.",
		button: "Shop Now",
		id: 2,
	},{
		imageUrl: "/team_engage.jpg",
		title: "Speaking & Events",
		description: "Elevate your events with engaging and insightful talks from our seasoned social media experts.",
		button: "Get in touch",
		id: 3,
	},{
		imageUrl: "/corporate_engage.jpg",
		title: "Digital Literacy Programs",
		description: "Designed to equip underprivileged youth with the skills to succeed in the digital world.",
		button: "Sign up",
		id: 4,
	},]
	return (
		<div className="w-screen ">
			{businessCard.map((item) => (
				<div key={item.id}>
					<Image src={item.imageUrl} alt="Consulting" width={400} height={400} />
					<h1>{item.title}</h1>
					<p>{item.description}</p>
				</div>
			))}
		</div>
	)
}
export default ForBusiness

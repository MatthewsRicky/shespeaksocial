import React from 'react'

const ForBusiness = () => {

	const businessCard = [{
		imageUrl: (""),
		title: "Corporate Training & Coaching",
		description: "Equip your workforce with the essential digital skills needed to thrive in today's online world",
		button: "Get started",
	},{
		imageUrl: (""),
		title: "Full Social Media Management",
		description: "For dedicated and ambitious entrepreneurs looking to hand over their social media to an expert team.",
		button: "Shop Now",
	},{
		imageUrl: (""),
		title: "Speaking & Events",
		description: "Elevate your events with engaging and insightful talks from our seasoned social media experts.",
		button: "Get in touch",
	},{
		imageUrl: (""),
		title: "Digital Literacy Programs",
		description: "Designed to equip underprivileged youth with the skills to succeed in the digital world.",
		button: "Sign up",
	},]
	return (
		<div className="w-screen ">
			<div>
				<h1>Corporate Training & Coaching</h1>
			</div>
			<div>
				<h1>Full Social Media Management</h1>
			</div>
			<div>
				<h1>Speaking & Events</h1>
			</div>
			<div>
				<h1>Digital Literacy Programs</h1>
			</div>
		</div>
	)
}
export default ForBusiness

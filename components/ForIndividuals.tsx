import React from 'react'
import Image from "next/image";

const ForIndividuals = () => {

	const individual = [
		{
			id : 1,
			imgurl: "/consulting.jpg",
			title: "1:1 Coaching",
			description:"Social Strategy Coaching for freelancers, marketers and entrepreneurs to help you reach long-term success.",
			btnlabel:"Let's Chat",
			alt: "Coaching",
		},
		{
			id : 2,
			imgurl: "/corporate_engage.jpg",
			title: "Templates Shop",
			description:"Browse in demand templates, designed to help you get organized, save time and grow your socials.",
			btnlabel:"Shop now",
			alt: "Templates",
		},
		{
			id : 3,
			imgurl: "/team_engage.jpg",
			title: "Freelance Resources",
			description:"Turn your social media passion into a fully fledged career with these MUST-HAVE freelance tools and kits.",
			btnlabel:"Learn more",
			alt: "Freelance",
		},
	]

	return (
		<div className="flex justify-center items-center gap-8 m-4 px-3 py-4">
			{individual.map((item, index) => (
				<div key={item.id}>
					<Image src={item.imgurl} alt={item.alt} />
				</div>
			))}
		</div>
	)
}
export default ForIndividuals

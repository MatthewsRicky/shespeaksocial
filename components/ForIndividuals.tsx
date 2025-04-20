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
		<div className="flex justify-between h-full items-center shadow-lg rounded-lg shadow-violet-300 gap-8 m-4 px-3 py-4">
			{individual.map((item) => (
				<div key={item.id} className="flex flex-col items-center justify-between h-100 py-4 px-2 shadow-md shadow-pink-200 gap-y-4">
					<Image src={item.imgurl} alt={item.alt} width={500} height={500} className="rounded-md flex" />
					<h1 className="font-bold text-lg text-slate-800">{item.title}</h1>
					<p className="font-semibold text-md text-slate-700 text-center">{item.description}</p>
					<button className="border my-2 px-3 py-2 rounded-sm bg-pink-400/90 text-slate-800 hover:scale-105 hover:bg-pink-500 hover:text-slate-200 transition-all duration-200 hover:shadow-pink-500 hover:shadow-sm hover:border-pink-500 border-pink-300 text-center">{item.btnlabel}</button>
				</div>
			))}
		</div>
	)
}
export default ForIndividuals

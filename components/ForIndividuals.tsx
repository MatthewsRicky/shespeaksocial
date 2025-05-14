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
		<div className="flex md:w-[90%] flex-col md:flex-row justify-between min-h-full items-center rounded-lg  gap-8 m-4 my-24 px-3 py-4">
			{individual.map((item) => (
				<div key={item.id} className="flex flex-col items-center justify-between h-125 md:h-full shadow-md shadow-violet-300 gap-y-4 bg-linear-to-b from-violet-50 to-violet-100">
					<Image src={item.imgurl} alt={item.alt} width={500} height={500} className="rounded-md flex" />
					<div className="flex flex-col py-4 px-2 items-center justify-center gap-6">
						<h1 className="font-bold text-lg bg-linear from-pink-50 to-violet-200 shadow-lg shadow-violet-300 px-2 py-1 rounded-md text-violet-900">{item.title}</h1>
						<p className="font-semibold text-md text-slate-700 text-center">{item.description}</p>
						<button className="border my-2 px-3 py-2 rounded-sm hover:bg-pink-300 font-bold hover:text-violet-900 hover:scale-105 bg-pink-500 text-slate-200 transition-all duration-200 hover:shadow-pink-500 hover:shadow-sm hover:border-pink-500 border-pink-300 text-center shadow-md shadow-violet-300">
							{item.btnlabel}
						</button>
					</div>
				</div>
			))}
		</div>
	)
}
export default ForIndividuals

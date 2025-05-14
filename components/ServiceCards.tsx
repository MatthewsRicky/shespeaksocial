import React from 'react'
import Image from "next/image";


const ServiceCards = () => {

	const service =[
		{
			id: 1,
			imgUrl: "/make-money.png",
			title: "Make More Money",
			description: "We help free up your time so you can focus on what you do best - running your business.",
		},
		{
			id: 2,
			imgUrl: "/like.png",
			title: "Turn Likes into Clients",
			description: "We help you convert your online audience into loyal customers and boost your bottom line.",
		},
		{
			id: 3,
			imgUrl: "/social.png",
			title: "Level Your Social Media Skills",
			description: "Take advantage of our free ebooks, training programs and workshops to stay ahead of the curve",
		},
		{
			id: 4,
			imgUrl: "/grow.png",
			title: "Grow Your Business On Social Media",
			description: "We help you identify your ideal audience, craft targeted content and ensure you're using the right platforms to achieve your goals.",
		},
	]

	return (
		<div className="flex items-center justify-center scroll-auto w-full h-fit bg-linear-to-br flex-col py-10">
			<header>
				<h1 className="font-bold text-3xl">How can I help you</h1>
				</header>
				<div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 m-w-[90%] lg:w-[80%] mx-auto rounded-lg  m-4  text-slate-900">

					{service.map((service) => (
						<section  key={service.id} className="flex items-center justify-center mx-autoodd:translate-y-[-10] even:translate-y-10">
							<div className="flex sm:flex-col items-center justify-around text-center h-[40%] w-[90%] md:w-50 rounded-lg  min-h-[28rem] py-4 px-2 m-2 sm:m-3 lg:m-4 bg-linear-to-b from-violet-50 to-pink-100 shadow-violet-600/20 shadow-xl hover:scale-105 transition-all ease-in-out">
								<Image src={service.imgUrl} alt="make-money icon" width={50} height={50} className="h-[50%]"/>
								<div className="flex-col gap-4 items-center justify-between py-3.5 rounded-lg px-2 ">
									<h2 className="font-medium py-2">{service.title}</h2>
									<p>{service.description}</p>
								</div>
							</div>
						</section>
					))}
				</div>

		</div>
	)
}
export default ServiceCards

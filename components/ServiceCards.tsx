import React from 'react'
import Image from "next/image";


const ServiceCards = () => {
	return (
		<div className="flex items-center justify-center scroll-auto max-w-fit h-fit bg-gradient-to-br from-pink-50/90 to-purple-100/70 flex-col py-10">
			<header>
				<h1 className="font-bold text-3xl">How can I help you</h1>
				</header>
				<div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 m-w-[90%] lg:w-[80%] mx-auto rounded-lg  m-4 text-slate-900">
					<div className="flex sm:flex-col items-center justify-center text-center h-[23%] w-[90%] md:w-[23%] lg:w-[20%] rounded-lg  min-h-[28rem] py-4 px-2 m-2 sm:m-3 lg:m-4 bg-gradient-to-b from-purple-50 to-pink-100 md:translate-y-[18px] shadow-emerald-600/20 shadow-xl hover:scale-105 transition-all ease-in-out">
						<Image src="/make-money.png" alt="make-money icon" width={50} height={50} />
						<div className="flex-col gap-4 items-center justify-between py-3.5 rounded-lg px-2 ">
							<h2 className="font-medium py-2">Make More Money</h2>
							<p>We help free up your time so you can focus on what you do best - running your business.</p>
						</div>
					</div>
					<div className="flex sm:flex-col items-center justify-center text-center h-[23%] w-[90%] md:w-[23%] lg:w-[20%] rounded-lg  min-h-[28rem] py-4 px-2 m-2 sm:m-3 lg:m-4 bg-gradient-to-b from-purple-50 to-pink-100 md:translate-y-[-18px] shadow-emerald-600/20 shadow-xl hover:scale-105 transition-all ease-in-out">
						<Image src="/like.png" alt="Like icon" width={50} height={50} />
						<div className="flex-col gap-4 items-center justify-between py-3.5 px-2 ">
							<h2 className="font-medium py-2">Turn Likes into Clients</h2>
							<p>We help you convert your online audience into loyal customers and boost your bottom line.</p>
						</div>
					</div>
					<div className="flex sm:flex-col items-center justify-center text-center h-[23%] w-[90%] md:w-[23%] lg:w-[20%] rounded-lg  min-h-[28rem] py-4 px-2 m-2 sm:m-3 lg:m-4 bg-gradient-to-b from-purple-50 to-pink-100 md:translate-y-[18px] shadow-emerald-600/20 shadow-xl hover:scale-105 transition-all ease-in-out">
						<Image src="/social.png" alt="Social icon" width={50} height={50} />
						<div className="flex-col gap-4 items-center justify-between py-3.5 px-2 ">
							<h2 className="font-medium py-2">Level Your Social Media Skills</h2>
							<p>Take advantage of our free ebooks, training programs and workshops to stay ahead of the curve</p>
						</div>
					</div>
					<div className="flex sm:flex-col items-center justify-center text-center h-[23%] w-[90%] md:w-[23%] lg:w-[20%] rounded-lg  min-h-[28rem] py-4 px-2 m-2 sm:m-3 lg:m-4 bg-gradient-to-b from-purple-50 to-pink-100 md:translate-y-[-18px] shadow-emerald-600/20 shadow-xl hover:scale-105 transition-all ease-in-out">
						<Image src="/grow.png" alt="Grow icon" width={50} height={50} />
						<div className="flex-col gap-4 items-center justify-between py-3.5 px-2 ">
							<h2 className="font-medium py-2">Grow Your Business On Social Media</h2>
							<p>We help you identify your ideal audience, craft targeted content and ensure you&apos;re using the right platforms to achieve your goals.</p>
						</div>
					</div>
				</div>

		</div>
	)
}
export default ServiceCards

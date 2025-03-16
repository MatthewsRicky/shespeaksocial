import React from 'react'
import Image from "next/image";

const ServiceCards = () => {
	return (
		<div className="flex items-center justify-center overflow-hidden max-w-fit h-screen bg-gradient-to-br from-pink-50/90 to-pink-100/70 flex-col">
			<header>
				<h1 className="font-bold text-3xl">How can I help you</h1>
				</header>
				<div className="group flex md:flex-row flex-col items-center justify-between px-4 py-3 w-[90%] lg:w-[80%] mx-auto rounded-lg  m-4 text-slate-900">
					<div className="flex sm:flex-col items-center justify-center text-center w-[90%] md:w-[23%] lg:w-[20%] rounded-lg  min-h-80 py-4 px-2 m-2 sm:m-3 lg:m-4 bg-pink-100 translate-y-8 shadow-emerald-600/20 shadow-xl">
						<Image src="/make-money.png" alt="make-money icon" width={50} height={50} />
						<div className="flex-col gap-4 items-center justify-between py-3.5 rounded-lg px-2 ">
							<h2 className="font-medium py-2">Make More Money</h2>
							<p>We help free up your time so you can focus on what you do best - running your business.</p>
						</div>
					</div>
					<div className="flex sm:flex-col items-center justify-center text-center w-[90%] md:w-[23%] lg:w-[20%] rounded-lg min-h-80 py-4 px-2 m-2 sm:m-3 lg:m-4 bg-pink-100 translate-y-[-8] shadow-emerald-600/20 shadow-xl">
						<Image src="/make-money.png" alt="make-money icon" width={50} height={50} />
						<div className="flex-col gap-4 items-center justify-between py-3.5 px-2 ">
							<h2 className="font-medium py-2">Make More Money</h2>
							<p>We help free up your time so you can focus on what you do best - running your business.</p>
						</div>
					</div>
					<div className="flex sm:flex-col items-center justify-center text-center w-[90%] md:w-[23%] lg:w-[20%] rounded-lg min-h-80 py-4  px-2 m-2 sm:m-3 lg:m-4 bg-pink-100 translate-y-8 shadow-emerald-600/20 shadow-xl">
						<Image src="/make-money.png" alt="make-money icon" width={50} height={50} />
						<div className="flex-col gap-4 items-center justify-between py-3.5 px-2 ">
							<h2 className="font-medium py-2">Make More Money</h2>
							<p>We help free up your time so you can focus on what you do best - running your business.</p>
						</div>
					</div>
					<div className="flex sm:flex-col items-center justify-center text-center w-[90%] md:w-[23%] lg:w-[20%] rounded-lg min-h-80 py-4 px-2 m-2 sm:m-3 lg:m-4 bg-pink-100 translate-y-[-8] shadow-emerald-600/20 shadow-xl">
						<Image src="/make-money.png" alt="make-money icon" width={50} height={50} />
						<div className="flex-col gap-4 items-center justify-between py-3.5 px-2 ">
							<h2 className="font-medium py-2">Make More Money</h2>
							<p>We help free up your time so you can focus on what you do best - running your business.</p>
						</div>
					</div>
				</div>

		</div>
	)
}
export default ServiceCards

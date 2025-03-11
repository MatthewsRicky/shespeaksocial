import React from 'react'
import Image from "next/image";

const ServiceCards = () => {
	return (
		<div className="flex items-center justify-center overflow-hidden max-w-fit h-screen bg-gradient-to-br from-pink-200/90 to-pink-300/70 flex-col">
			<header>
				<h1 className="font-bold text-3xl">How can I help you</h1>
				</header>
				<div className="flex sm:flex-row flex-col items-center justify-between px-4 py-3 w-[80%] mx-auto rounded-lg  m-4 text-slate-900">
					<div className="flex sm:flex-col items-center justify-center text-center w-[20%] rounded-lg  min-h-80 px-2 m-2 sm:m-3 lg:m-4 bg-pink-100">
						<Image src="/make-money.png" alt="make-money icon" width={50} height={50} />
						<div className="flex-col gap-4 items-center justify-between rounded-lg py-4 px-2 ">
							<h2>Make More Money</h2>
							<p>We help free up your time so you can focus on what you do best - running your business.</p>
						</div>
					</div>
					<div className="flex sm:flex-col items-center justify-center text-center w-[20%] rounded-lg min-h-80 py-4 px-2 m-2 sm:m-3 lg:m-4 bg-pink-100">
						<Image src="/make-money.png" alt="make-money icon" width={50} height={50} />
						<div className="flex-col gap-4 items-center justify-between px-2 ">
							<h2>Make More Money</h2>
							<p>We help free up your time so you can focus on what you do best - running your business.</p>
						</div>
					</div>
					<div className="flex sm:flex-col items-center justify-center text-center w-[20%] rounded-lg min-h-80 py-4  px22 m-2 sm:m-3 lg:m-4 bg-pink-100">
						<Image src="/make-money.png" alt="make-money icon" width={50} height={50} />
						<div className="flex-col gap-4 items-center justify-between px-2 ">
							<h2>Make More Money</h2>
							<p>We help free up your time so you can focus on what you do best - running your business.</p>
						</div>
					</div>
					<div className="flex sm:flex-col items-center justify-center text-center w-[20%] rounded-lg min-h-80 py-4 px-2 m-2 sm:m-3 lg:m-4 bg-pink-100">
						<Image src="/make-money.png" alt="make-money icon" width={50} height={50} />
						<div className="flex-col gap-4 items-center justify-between px-2 ">
							<h2>Make More Money</h2>
							<p>We help free up your time so you can focus on what you do best - running your business.</p>
						</div>
					</div>
				</div>

		</div>
	)
}
export default ServiceCards

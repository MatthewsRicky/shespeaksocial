import React from 'react'
import Image from "next/image";

const ServiceCards = () => {
	return (
		<div className="flex items-center justify-center   w-full h-screen flex-col">
			<header>
				<h1>How can I help you</h1>
				</header>
				<div className="flex items-center justify-between px-4 py-3 bg-pink-100  rounded-lg  m-8 text-slate-900">
					<div className="flex sm:flex-col items-center justify-between  px-2 m-4 ">
						<Image src="/make-money.png" alt="make-money icon" width={50} height={50} />
						<div className="flex-col gap-4 items-center justify-between px-2 ">
							<h2>Make More Money</h2>
							<p>We help free up your time so you can focus on what you do best - running your business.</p>
						</div>
					</div><div className="flex sm:flex-col items-center justify-between px-2 m-4 ">
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

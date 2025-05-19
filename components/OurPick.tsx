import React from 'react'
import Image from "next/image";

const OurPick = () => {
	return (
		<main>
			<h1 className="text-slate-900 mb-8 underline underline-offset-8 w-full font-bold leading-none">Our Pick</h1>
			<div className="bg-white flex flex-col h-full items-start justify-start p-2 rounded-lg shadow-lg shadow-slate-900">
				<div className="grid grid-cols-2 gap-2 w-full">
					<Image src="/our-picks.jpg" alt="Our Picks" height={500} width={500} className="rounded-md flex w-full h-[70%]"/>
					<section className="flex flex-col w-full justify-center gap-2">
						<h1 className="font-medium leading-5 text-md">
							A Beginner&apos;s Guide Social Media Marketing for Startups in Nairobi
						</h1>
						<h2 className="text-slate-800 font-regular">November 7, 2024</h2>
					</section>
				</div>
			</div>
		</main>

	)
}
export default OurPick

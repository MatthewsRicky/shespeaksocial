import React from 'react'
import {BsFire} from "react-icons/bs";
import Image from "next/image";

const Hot = () => {
	return (
		<main>
				<h1 className="flex gap-3 text-slate-900 mb-8 underline underline-offset-8 w-full font-bold leading-none">
					Hot
					<span className="text-yellow-500"><BsFire /></span>
				</h1>
			<div className="grid grid-cols-1 grid-rows-3 h-fit gap-2">
				<div className="bg-serenade col-span-1 mb-6 items-start justify-start row-span-2 flex flex-col rounded-lg shadow-md shadow-slate-900/30">
					<Image src="/blackfriday.jpg" alt="Hot" width={500} height={500} />
					<h1 className="text-xl font-semibold p-2 text-center">How To 10x Your Sales This Black Friday</h1>
					<div className="flex flex-col gap-2 p-4">
						<h2 className="font-medium text-sm">By She Speaks Social <span className="font-normal text-sm">- November 22, 2024</span></h2>
						<p className="text-sm flex text-left">Ready to make this Black Friday your best one yet? Whether you&apos;re a seasoned marketer...</p>
					</div>
					<div className="bg-white col-span-1 row-span-1 flex m-1 rounded-md">
						<div className="bg-white flex flex-col h-full items-start justify-start p-2 rounded-lg shadow-lg shadow-slate-900">
							<div className="grid grid-cols-2 gap-2 w-full">
								<Image src="/digital-marketing.jpg" alt="Our Picks" height={500} width={500} className="rounded-md flex w-full h-[70%] shadow-sm shadow-slate-900/60"/>
								<section className="flex flex-col w-full justify-center gap-2">
									<h1 className="font-medium text-sm">
										How to Find and Share Your LinkedIn Profile Link for Easy Networking
									</h1>
									<h2 className="text-slate-800 font-regular">November 1, 2024</h2>
								</section>
							</div>
						</div>
					</div>
				</div>

				</div>
		</main>
	)
}
export default Hot

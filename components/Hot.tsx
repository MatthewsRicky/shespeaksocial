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
			<div className="grid grid-cols-1 grid-rows-3 gap-2">
				<div className="bg-serenade col-span-1 gap-3 items-start justify-start row-span-2 flex flex-col rounded-lg">
					<Image src="/blackfriday.jpg" alt="Hot" width={500} height={500} />
					<h1 className="text-xl font-semibold p-2 text-center">How To 10x Your Sales This Black Friday</h1>
					<div className="flex flex-col gap-1 p-2">
						<h2 className="font-medium text-md">By She Speaks Social <span className="font-normal text-sm">- November 22, 2024</span></h2>
						<p>Ready to make this Black Friday your best one yet? Whether you&apos;re a seasoned marketer...</p>
					</div>
				</div>
				<div className="bg-sorrell-brown col-span-1 row-span-1">
					image 2
				</div>
			</div>
		</main>
	)
}
export default Hot

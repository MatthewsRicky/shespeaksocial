import React from 'react'
import Image from "next/image";

const DontMiss = () => {
	return (
		<div className="flex flex-col items-center justify-between gap-4 h-fit">
			<h1 className="text-slate-900 mb-8 underline underline-offset-8 w-full font-bold leading-none">
				Don&apos;t Miss
			</h1>
			<div className="bg-serenade flex flex-col gap-2 rounded-md shadow-md shadow-slate-900/70">
				<div className=" relative flex items-center justify-center w-full">
					<Image src="/career.jpg" alt="Carrers" height={500} width={500} className="flex items-center justify-center w-full h-full" />
					<span className="absolute left-1 bottom-0 rounded text-white  bg-slate-800/80 px-2 py-1 hover:bg-deep-pink/70 z-10 flex">
						Careers
						</span>
				</div>
				<h1 className="flex items-center justify-start w-full">How ToMake Your X(Twitter) account Private.</h1>
				<span className="flex items-center justify-start w-full">
						<h2>She Speaks Social,</h2>
						<h3>November 14th, 2024</h3>
					</span>
				<p className="text-gray-600 leading-none">
					Ever feel like you want a bit more control over who sees your tweets? Whether…
				</p>
			</div>

		</div>
	)
}
export default DontMiss

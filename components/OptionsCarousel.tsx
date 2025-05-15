"use client"

 import React, {useState} from 'react'
 import ForIndividuals from "./ForIndividuals";
 import ForBusiness from "./ForBusiness";

const OptionsCarousel = () => {
	const [optionOpen, setOptionOpen] = useState(false);


	return (
		<section className="flex my-16 justify-center w-fit mx-auto items-center ">

			{/*<span className="peer/business">For Business</span>*/}
			{/*<span className="peer/individual">For Individual</span>*/}

			{/*<div className="flex">*/}
			{/*	<div className="hidden peer-active/business:flex">*/}
			{/*		<ForBusiness />*/}
			{/*	</div>*/}
			{/*	<div className="hidden peer-active/individual:flex">*/}
			{/*		<ForIndividuals />*/}
			{/*	</div>*/}

			{/*</div>*/}

			<div className="flex flex-col items-center justify-between">
				<div className="flex flex-col md:flex-row justify-center mx-auto gap-6 items-center ">
					<button className="hover:cursor-pointer bg-pink-500 min-w-full px-2 py-2 text-slate-100 rounded-md shadow-lg shadow-violet-300 font-bold" onClick={() => {
						setOptionOpen(optionOpen);
					}}>
						For Businesses
					</button>
					<button className="hover:cursor-pointer bg-pink-500 min-w-full px-2 py-2 text-slate-100 rounded-md shadow-lg shadow-violet-300 font-bold" onClick={() => {
						setOptionOpen(!optionOpen);
					}}>
						For Individuals
					</button>
				</div>
				<div className="flex flex-col w-[90%] items-center mx-auto justify-between">
					<ForBusiness />
				</div>
				<div className="flex flex-col w-[90%] items-center mx-auto justify-between">
					<ForIndividuals />
				</div>
			</div>

		</section>
			)
}
export default OptionsCarousel

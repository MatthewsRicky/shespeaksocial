"use client"

 import React, {useState} from 'react'
 import ForIndividuals from "./ForIndividuals";
 import ForBusiness from "./ForBusiness";

const OptionsCarousel = () => {
	const [optionOpen, setOptionOpen] = useState(true);
  const [individualOpen, setIndividualOpen] = useState(false);


	return (
		<section className="flex my-16 justify-center w-screen mx-auto items-center ">

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

			<div className="flex flex-col w-[90%] items-center justify-between">
				<div className="flex justify-between gap-80 items-center w-[90%] px-6 py-4 bg-linear-to-br from-pink-50 to-pink-100 text-slate-800 rounded-md shadow-lg shadow-violet-300">
					<button onClick={() => {
						setOptionOpen(!optionOpen)
						setIndividualOpen(!individualOpen)
					}}>For Businesses</button>
					<button onClick={() => {
						setIndividualOpen(!individualOpen)
						setOptionOpen(!optionOpen)
					}}>For Individuals</button>

				</div>


				<div className="flex flex-col w-[90%] items-center justify-between">
					{optionOpen && !individualOpen ? (
						<ForBusiness />
					) : (<ForIndividuals />)}
				</div>
			</div>

		</section>
			)
}
export default OptionsCarousel

"use client"

import React, {useState} from 'react'
import ForIndividuals from "./ForIndividuals";
import ForBusiness from "./ForBusiness";

const OptionsCarousel = () => {

	const [optionOpen, setOptionOpen] = useState(true);
	const [individualOpen, setIndividualOpen] = useState(false);


	return (
		<section className="flex flex-col gap-8 m-8 px-12 justify-start items-center ">
			<div className="flex 7justify-between items-center w-full">

				<button onClick={() => {
					setOptionOpen(!optionOpen)
					setIndividualOpen(!individualOpen)
				}}>For Businesses</button>
				<button onClick={() => {
					setIndividualOpen(!individualOpen)
					setOptionOpen(!optionOpen)
				}}>For Individuals</button>

			</div>


			<div className="">
				{optionOpen && !individualOpen ? (
					<ForBusiness />
				) : (<ForIndividuals />)}
			</div>




		</section>
			)
}
export default OptionsCarousel

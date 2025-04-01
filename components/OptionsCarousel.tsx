"use client"

import React, {useState} from 'react'
import ForIndividuals from "./ForIndividuals";
import ForBusiness from "./ForBusiness";

const OptionsCarousel = () => {

	const [optionOpen, setOptionOpen] = useState(true);
	const [individualOpen, setIndividualOpen] = useState(true);


	return (
		<section className="flex gap-8 m-8 px-12 justify-start items-center ">

			<button onClick={() => setOptionOpen(!optionOpen)}>For Businesses</button>
			<button onClick={() => setIndividualOpen(!individualOpen)}>For Individuals</button>

			{optionOpen ? (
				<ForBusiness />
			) : 	!setOptionOpen}

			{individualOpen ? (
				<ForIndividuals />
			) : !optionOpen}



		</section>
			)
}
export default OptionsCarousel

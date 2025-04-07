"use client"

 import React, {useState} from 'react'
 import ForIndividuals from "./ForIndividuals";
 import ForBusiness from "./ForBusiness";

const OptionsCarousel = () => {
	const [optionOpen, setOptionOpen] = useState(true);
  const [individualOpen, setIndividualOpen] = useState(false);


	return (
		<section className="flex gap-8 m-8 px-12 justify-start items-center ">

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

			<div className="flex flex-col">
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
			</div>






		</section>
			)
}
export default OptionsCarousel

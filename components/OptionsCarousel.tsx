"use client"

import React, {useState} from 'react'

const OptionsCarousel = () => {

	const [optionOpen, setOptionOpen] = useState(true);
	const [individualOpen, setIndividualOpen] = useState(true);


	return (
		<section className="flex gap-8 m-8 px-12 justify-start items-center ">

			<button onClick={() => setOptionOpen(!optionOpen)}>For Businesses</button>
			<button onClick={() => setIndividualOpen(!individualOpen)}>For Individuals</button>

			{optionOpen ? (
				<div>
					<div>
						<h1>Corporate Training & Coaching</h1>
					</div>
					<div>
						<h1>Full Social Media Management</h1>
					</div>
					<div>
						<h1>Speaking & Events</h1>
					</div>
					<div>
						<h1>Digital Literacy Programs</h1>
					</div>
				</div>
			) : 	!setOptionOpen}

			{individualOpen ? (
				<div>
					<div>
						<h1>1 : 1 Coaching</h1>
					</div>
					<div>
						<h1>Templates Shop</h1>
					</div>
					<div>
						<h1>Freelance Resources</h1>
					</div>
				</div>
			) : !optionOpen}



		</section>
			)
}
export default OptionsCarousel

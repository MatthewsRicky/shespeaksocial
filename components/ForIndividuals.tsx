import React from 'react'

const ForIndividuals = () => {

	const individual = [
		{
			id : 1,
			imgurl: "",
			title: "",
			description:"",
			btnlabel:"",
		},
		{
			id : 1,
			imgurl: "",
			title: "",
			description:"",
			btnlabel:"",
		},
		{
			id : 1,
			imgurl: "",
			title: "",
			description:"",
			btnlabel:"",
		},
	]

	return (
		<div className="flex justify-center items-center gap-8 m-4 px-3 py-4">
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
	)
}
export default ForIndividuals

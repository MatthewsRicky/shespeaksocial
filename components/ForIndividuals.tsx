import React from 'react'

const ForIndividuals = () => {

	const individual = [
		{
			id : 1,
			imgurl: "",
			title: "1:1 Coaching",
			description:"Social Strategy Coaching for freelancers, marketers and entrepreneurs to help you reach long-term success.",
			btnlabel:"Let's Chat",
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
				<h1 className=
				'flex justify-center items-center mx-auto text-lg font-bold'>1 : 1 Coaching</h1>
			</div>
			<div>
				<h1 className=
				'flex justify-center items-center mx-auto text-lg font-bold'>Templates Shop</h1>
			</div>
			<div>
				<h1 className=
				'flex justify-center items-center mx-auto text-lg font-bold'>Freelance Resources</h1>
			</div>
		</div>
	)
}
export default ForIndividuals

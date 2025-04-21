import React from 'react'
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

const ReviewCard = () => {
const reviews = [
	{
		imgurl: "/User1.jpeg",
		name: "Kim LaPaglia",
		description: "Working with Shirlyn and her team is like winning the lotto. I couldn't have dreamed up a better person to collaborate with.  You just don't find people who are as talented, professional, driven, communicative, kind and fun as she is.  Thanks to Shirlyn my work feels like my ultimate purpose is being fulfilled while I'm having the party of my life. It's a blessing to know her and an honor to create and work with her.",
		rating: <BsStarFill />,
	},
	{
		imgurl: "/User2.jpeg",
		name: "Jeff Mkungusi",
		description: "Working with She Speaks Social transformed my business. Their digital marketing strategy doubled my social media engagement and website traffic, bringing in not just more leads but the right customers. The team was proactive, communicative, and genuinely invested in my success. They’re more than a service provider—they’re a true partner. Highly recommend!",
		rating: <BsStarFill />,
	},
	{
		imgurl: "/User5.jpg",
		name: "Iranic Digital",
		description: "I was struggling to get my brand noticed until I started working with She Speaks Social Media Agency. They crafted a personalized strategy that truly captured my vision and connected with my audience. In just a few months, I saw significant growth in both engagement and conversions. Their team is knowledgeable, responsive, and committed to results. Partnering with them has been one of the best decisions for my business!",
		rating: <BsStarFill />,
	},
]

	return (
		<div className="grid grid-cols-3 gap-16 rounded-xl mx-12 my-6 p-2">
			{reviews.map(item => (
				<div key={item.name} className="flex flex-col gap-2 items-center justify-between text-center text-pink-900 bg-gradient-to-b from-white  to-pink-50 rounded-xl shadow-lg shadow-violet-300">
					<Image src={item.imgurl} alt="Reviewer image" width={500} height={500} className="rounded-full h-25 w-25 flex shadow-lg shadow-violet-300 hover:scale-105 transiton-all duration-200" />
					<h1 className="font-semibold text-lg">{item.name}</h1>
					<p className="font-medium px-6 py-3 text-center text-sm text-slate-800">{item.description}</p>
					<div className="flex my-6 text-yellow-400">
						<span>{item.rating}</span>
						<span>{item.rating}</span>
						<span>{item.rating}</span>
						<span>{item.rating}</span>
						<span>{item.rating}</span>
					</div>
				</div>
			))
			}

		</div>
	)
}
export default ReviewCard

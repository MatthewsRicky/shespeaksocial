import React from 'react'
import Image from "next/image";
import { BsStars } from "react-icons/bs";

const ReviewCard = () => {
const reviews = [
	{
		imgurl: "/User1.jpeg",
		name: "Kim LaPaglia",
		description: "Working with Shirlyn and her team is like winning the lotto. I couldn't have dreamed up a better person to collaborate with.  You just don't find people who are as talented, professional, driven, communicative, kind and fun as she is.  Thanks to Shirlyn my work feels like my ultimate purpose is being fulfilled while I'm having the party of my life. It's a blessing to know her and an honor to create and work with her.",
		rating: <BsStars />,
	},
	{
		imgurl: "/User2.jpeg",
		name: "Jeff Mkungusi",
		description: "Working with She Speaks Social transformed my business. Their digital marketing strategy doubled my social media engagement and website traffic, bringing in not just more leads but the right customers. The team was proactive, communicative, and genuinely invested in my success. They’re more than a service provider—they’re a true partner. Highly recommend!",
		rating: <BsStars />,
	},
	{
		imgurl: "/User5.jpg",
		name: "Iranic Digital",
		description: "I was struggling to get my brand noticed until I started working with She Speaks Social Media Agency. They crafted a personalized strategy that truly captured my vision and connected with my audience. In just a few months, I saw significant growth in both engagement and conversions. Their team is knowledgeable, responsive, and committed to results. Partnering with them has been one of the best decisions for my business!",
		rating: <BsStars />,
	},
]

	return (
		<div className="grid grid-cols-3 gap-2 rounded-xl m-6 p-2">
			{reviews.map(item => (
				<div key={item.name} className="flex flex-col gap-6 items-center justify-between text-center text-slate-900 bg-gradient-to-b from-pink-50  to-pink-100 rounded-xl shadow-lg shadow-violet-300">
					<Image src={item.imgurl} alt="Reviewer image" width={500} height={500} className="rounded-full h-25 w-25 flex shadow-lg shadow-violet-300 hover:scale-105 transiton-all duration-200" />
					<h1 className="font-medium my-6 text-xl border-b-2 py-2 px-3 drop-shadow-violet-300 drop-shadow-sm bg-pink-300 rounded md">{item.name}</h1>
					<p className="text-center p-4 flex justify-center font-medium text-sm">{item.description}</p>
					<span className="my-4">{item.rating}</span>
				</div>
			))
			}

		</div>
	)
}
export default ReviewCard

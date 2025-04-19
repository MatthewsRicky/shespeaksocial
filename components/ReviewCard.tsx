import React from 'react'
import Image from "next/image";

const ReviewCard = () => {
const reviews = [
	{
		imgurl: "/about2.jpeg",
		name: "Kim LaPaglia",
		description: "Working with Shirlyn and her team is like winning the lotto. I couldn't have dreamed up a better person to collaborate with.  You just don't find people who are as talented, professional, driven, communicative, kind and fun as she is.  Thanks to Shirlyn my work feels like my ultimate purpose is being fulfilled while I'm having the party of my life. It's a blessing to know her and an honor to create and work with her.",
		rating: "5 star",
	},
	{
		imgurl: "/about2.jpeg",
		name: "Jeff Mkungusi",
		description: "Working with She Speaks Social transformed my business. Their digital marketing strategy doubled my social media engagement and website traffic, bringing in not just more leads but the right customers. The team was proactive, communicative, and genuinely invested in my success. They’re more than a service provider—they’re a true partner. Highly recommend!",
		rating: "5 star",
	},
	{
		imgurl: "/about2.jpeg",
		name: "Iranic Digital",
		description: "I was struggling to get my brand noticed until I started working with She Speaks Social Media Agency. They crafted a personalized strategy that truly captured my vision and connected with my audience. In just a few months, I saw significant growth in both engagement and conversions. Their team is knowledgeable, responsive, and committed to results. Partnering with them has been one of the best decisions for my business!",
		rating: "5 star",
	},
]

	return (
		<div className="grid grid-cols-3 gap-2 rounded-xl m-6 p-2 shadow-lg shadow-violet-300">
			{reviews.map(item => (
				<div key={item.name} className="flex flex-col gap-6 items-center justify-start text-center bg-gradient-to-b from-pink-50 to-pink-200 rounded-xl">
					<Image src={item.imgurl} alt="Reviewer image" width={500} height={500} className="rounded-full h-25 w-25" />
					<h1>{item.name}</h1>
					<p>{item.description}</p>
					<span>{item.rating}</span>
				</div>
			))
			}

		</div>
	)
}
export default ReviewCard

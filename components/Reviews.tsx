import React from 'react'
import ReviewCard from "@/components/ReviewCard";

const Reviews = () => {
	return (
		<section>
			<div className="flex flex-col gap-6 items-center justify-between mt-12">
				<h1 className="flex item-center justify-center mx-auto font-bold text-2xl text-slate-800 underline underline-offset-20 text-shadow-slate-600/40 text-shadow-lg">What our Customers say</h1>
				<ReviewCard />
			</div>
		</section>
	)
}
export default Reviews

import React from 'react'
import ReviewCard from "@/components/ReviewCard";

const Reviews = () => {
	return (
		<section>
			<div className="flex flex-col gap-6 items-center justify-between mt-12">
				<h1>What our Customers say</h1>
				<ReviewCard />
			</div>
		</section>
	)
}
export default Reviews

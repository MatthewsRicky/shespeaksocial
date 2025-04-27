import React from 'react';
import Image from 'next/image';

const Blog = () => {

	const posts = [
		{
			imageUrl: "/career.jpg",
			imageAlt: "Career",
			imageTitle: "careers",
			title: "Top Remote Jobs Hiring Now: High-Paying Digital Careers You Can Apply for Today",
			article: "There was a time when “work” meant fluorescent-lit offices, morning commutes in bumper-to-bumper traffic, and counting the hours until Friday.…",
			date: "March 1, 2025",
			author: "She Speaks Social",
		},
	]

	return (
		<div>
			{posts.map((post) => (
				<div key={post.title}>
					<div>
						<Image src={post.imageUrl} alt={post.imageAlt} width={200} height={200} />
					</div>
				</div>
			))}
		</div>
	)
}
export default Blog

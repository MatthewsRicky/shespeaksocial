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
		},{
			imageUrl: "/blackfriday.jpg",
			imageAlt: "Black Friday",
			imageTitle: "Hot",
			title: "How To 10x Your Sales This Black Friday",
			article: "Ready to make this Black Friday your best one yet? Whether you’re a seasoned marketer or just starting out, social…",
			date: "November 22, 2024",
			author: "She Speaks Social",
		},{
			imageUrl: "/how-to-tips.png",
			imageAlt: "How To Tips",
			imageTitle: "How-To-Tips",
			title: "How to Set Up a TikTok Shop for Beginners: Your Step-by-Step Guide",
			article: "Thinking about selling on TikTok Shop? With over a billion active users and a knack for creating viral trends, TikTok…",
			date: "November 20, 2024",
			author: "She Speaks Social",
		},{
			imageUrl: "/dontmiss.jpg",
			imageAlt: "Don't Miss",
			imageTitle: "Don't Miss",
			title: "How to Make Your X (Twitter) Profile Private",
			article: "Ever feel like you want a bit more control over who sees your tweets? Whether you’re sharing personal updates or…",
			date: "November 14, 2024",
			author: "She Speaks Social",
		},{
			imageUrl: "/news-and-socialmedia.jpg",
			imageAlt: "News and Updates",
			imageTitle: "news & updates",
			title: "The Role of Social Media in the Recently Concluded U.S. Elections",
			article: "The 2024 U.S. elections weren’t just a race for votes—they were a social media phenomenon. Discover how.",
			date: "November 7, 2024",
			author: "She Speaks Social",
		},{
			imageUrl: "/our-picks.jpg",
			imageAlt: "Our Picks",
			imageTitle: "Our Picks",
			title: "A Beginner’s Guide to Social Media Marketing for Startups in Nairobi",
			article: "Starting a new business is exciting, right? But let’s be honest—it can also feel overwhelming, especially when it comes to…",
			date: "November 7, 2024",
			author: "She Speaks Social",
		},{
			imageUrl: "/digital-marketing.jpg",
			imageAlt: "Digital Marketing",
			imageTitle: "Digital Marketing",
			title: "How to Find and Share Your LinkedIn Profile Link for Easy Networking",
			article: "how to find LinkedIn profile link on desktop and mobile",
			date: "November 1, 2024",
			author: "She Speaks Social",
		},{
			imageUrl: "/blog.jpg",
			imageAlt: "Blog",
			imageTitle: "Blog",
			title: "Why Instagram Is Making Your Videos Look ‘Worse’—And What It Means for Creators",
			article: "Instagram’s new approach to video quality is raising eyebrows. With a focus on “engagement bias,” many creators find themselves facing…",
			date: "November 1, 2024",
			author: "She Speaks Social",
		},{
			imageUrl: "/blog2.jpg",
			imageAlt: "Blog2",
			imageTitle: "Blog2",
			title: "Everything You Missed in September: Social Media and Digital Marketing Round-Up",
			article: "Welcome to our comprehensive round-up of social media updates from September 2024. As we delve into these updates, it’s clear…",
			date: "November 1, 2024",
			author: "She Speaks Social",
		},{
			imageUrl: "/blog3.jpg",
			imageAlt: "Blog3",
			imageTitle: "Blog3",
			title: "The Ultimate Guide to Freelancing Success: Essential Strategies for Independent Professionals",
			article: "how to find LinkedIn profile link on desktop and mobile",
			date: "October 29, 2024",
			author: "She Speaks Social",
		},
	]

	return (
		<main className="grid grid-cols-3 p-8">
			{posts.map((post) => (
				<section key={post.title} className="relative flex flex-col items-center gap-6 justify-center">
					<div className="relative">
						<span className="absolute right-1 bottom-[50%] text-slate-850  z-100">{post.imageTitle}</span>
						<Image src={post.imageUrl} alt={post.imageAlt} width={500} height={500} className="w-full" />

					</div>
					<h1>{post.title}</h1>
					<div className="">
						<h3>{post.author}</h3>
						<h4>{post.date}</h4>
					</div>
					<p className="">{post.article}</p>
				</section>
			))}
		</main>
	)
}
export default Blog

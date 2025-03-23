"use client"

import React from 'react'
import Image from "next/image";
import Link from "next/link";

const FounderAbout = () => {
	return (
		<section className="flex flex-col items-center justify-center w-full sm:w-[95%] md:w-[90%] lg:w-[85%] mx-auto my-8 bg-pink-100 rounded-xl p-8">
			<article>
				<Image
					src="/about.jpeg" alt="Founder About Me"  width={500} height={500}
					className="flex m-8 mx-auto rounded-lg shadow-lg shadow-green-400"
				/>
				<h1>Meet Shirlyn, founder of She Speaks Social Media Agency</h1>
				<p>She Speaks Social Media Agency is a global leader in digital marketing and social media strategy, empowering businesses of all sizes to harness the transformative power of social media.</p>
				<p>The agency aspires to create a significant impact not only in the business world but also in the community by empowering underprivileged girls through education and opportunities in the digital sphere.</p>
				<p>
					She Speaks Social Media Agency aims to shape the future of digital marketing and mold the future leaders of the digital world, bridging the gap between passion and purpose.
				</p>
				<Link href="/about">About She Speaks Social Media Agency</Link>
			</article>

		</section>
	)
}
export default FounderAbout

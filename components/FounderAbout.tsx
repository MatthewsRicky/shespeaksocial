import React from 'react'
import Image from "next/image";

const FounderAbout = () => {
	return (
		<section>
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
			</article>

		</section>
	)
}
export default FounderAbout

import React from 'react'
import Image from "next/image";

const FounderAbout = () => {
	return (
		<section>
			<Image
				src="/about.jpeg" alt="Founder About Me"  width={500} height={500}
				className="flex m-8 mx-auto rounded-lg shadow-lg shadow-green-400"
			/>

		</section>
	)
}
export default FounderAbout

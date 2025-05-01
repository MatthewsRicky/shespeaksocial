import React from 'react'
import {FaFacebook, FaThreads, FaXTwitter} from "react-icons/fa6";
import {FaInstagramSquare} from "react-icons/fa";

const Footer = () => {
	return (


		<section
			className="flex flex-col items-center gap-6 justify-center mx-0 bg-slate-900 text-white w-full">
			<div className="flex flex-col items-center justify-center gap-6 my-4">
				<div className="grid grid-cols-2 lg:grid-cols-4  gap-8 p-4 items-center justify-center">
					<div className="flex flex-col items-center gap-6 px-2 py-1 text-center rounded-lg shadow-md shadow-violet-300/20 my-3">
						<h1>About Us</h1>
						<article>We are known for our creativity, precision, and impact.
							Our brand reflects our dedication to quality,
							innovation, and social empowerment,
							differentiating us in the market as not just service providers but as change-makers</article>

					</div>
					<div  className="flex flex-col items-center gap-6 px-2 py-1 text-center rounded-lg shadow-md shadow-violet-300/20 my-3">
						<h1>Explore</h1>
						<article>1:1 Coaching
							Templates Shop
							Freelance Resources
							Corporate Training & Coaching
							Speaking & Events
							Digital Literacy Programs
							Freebies
							News & Updates
							Ebooks & Courses
							Web Dev Services</article>
					</div>
					<div className="flex flex-col items-center gap-6 px-2 py-1 text-center rounded-lg shadow-md shadow-violet-300/20 my-3">
						<h1>Newsletter</h1>
						<article>Fill in your email address
							to receive newsletters.</article>
					</div>
					<div className="flex flex-col items-center gap-6 px-2 py-1 text-center rounded-lg shadow-md shadow-violet-300/20 my-3">
						<h2>Follow Us</h2>
						<ul className="flex items-center gap-6  text-violet-800 rounded-lg">
							<li className="text-xl bg-pink-50 p-1.5 rounded-md">
								<FaFacebook />
							</li>
							<li className="text-xl bg-pink-50 p-1.5 rounded-md">
								<FaXTwitter />
							</li>
							<li className="text-xl bg-pink-50 p-1.5 rounded-md">
								<FaInstagramSquare />
							</li>
							<li className="text-xl bg-pink-50 p-1.5 rounded-md">
								<FaThreads />
							</li>
						</ul>
					</div>
				</div>
				<div>
					<p>Copyright @ 2025 She Speaks Social Media Agency. All Rights Reserved </p>
				</div>
			</div>
		</section>
	)
}
export default Footer

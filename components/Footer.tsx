import React from 'react'
import {FaFacebook, FaThreads, FaXTwitter} from "react-icons/fa6";
import {FaInstagramSquare} from "react-icons/fa";

const Footer = () => {
	return (


		<section
			className="flex flex-col items-center justify-center mx-0 bg-slate-900 text-white w-full">
			<div>
				<div className="flex">
					<div>
						<h1>About Us</h1>
						<article>We are known for our creativity, precision, and impact.
							Our brand reflects our dedication to quality,
							innovation, and social empowerment,
							differentiating us in the market as not just service providers but as change-makers</article>
						<h2>Follow Us</h2>
						<ul>
							<li>
								<FaFacebook />
							</li>
							<li>
								<FaXTwitter />
							</li>
							<li>
								<FaInstagramSquare />
							</li>
							<li>
								<FaThreads />
							</li>
						</ul>
					</div>
					<div>
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
					<div>
						<h1>Newsletter</h1>
						<article>Fill in your email address
							to receive newsletters.</article>
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

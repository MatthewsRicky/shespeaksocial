"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/home1-slider1.jpg", "/home1-slider2.jpg", "/home1-slider3.jpg"];

export default function HeroCarousel() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000); // Change every 5 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
			{/* Background Image Slideshow */}
			<div className="absolute inset-0">
				<AnimatePresence>
					<motion.div
						key={images[index]}
						className="absolute inset-0 bg-cover bg-center"
						style={{ backgroundImage: `url(${images[index]})` }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
					/>
				</AnimatePresence>
			</div>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40"></div>

			{/* Hero Content */}
			<div className="relative z-10 text-center">
				<h1 className="text-5xl font-bold">Welcome to Our Website</h1>
				<p className="text-lg mt-4">Your journey starts here.</p>
			</div>
		</section>
	);
}

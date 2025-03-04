"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
	{
		image: "/home1-slider1.jpg",
		title: "Discover Your Adventure",
		subtitle: "Explore the world like never before.",
	},
	{
		image: "/home1-slider2.jpg",
		title: "Experience the Thrill",
		subtitle: "Unleash your inner explorer.",
	},
	{
		image: "/home1-slider3.jpg",
		title: "Create Unforgettable Memories",
		subtitle: "Every moment tells a story.",
	},
];

export default function HeroCarousel() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % slides.length);
		}, 5000); // Change every 5 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
			{/* Background Image Slideshow */}
			<div className="absolute inset-0">
				<AnimatePresence>
					<motion.div
						key={slides[index].image}
						className="absolute inset-0 bg-cover bg-center"
						style={{ backgroundImage: `url(${slides[index].image})` }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
					/>
				</AnimatePresence>
			</div>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40"></div>

			{/* Hero Content (Individual per Slide) */}
			<div className="relative z-10 text-center px-6">
				<AnimatePresence mode="wait">
					<motion.div
						key={slides[index].title}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-5xl font-bold">{slides[index].title}</h1>
						<p className="text-lg mt-4">{slides[index].subtitle}</p>
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}

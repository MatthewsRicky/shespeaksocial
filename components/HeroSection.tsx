"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronLeft,  BiChevronRight } from "react-icons/bi";


const slides = [
	{
		image: "/home1-slider1.jpg",
		title: "We Make People Care About you on Social Media",
		subtitle: "We Offer A Comprehensive Suite Of Services Tailored To Meet the Unique Needs Of Entrepreneurs, Businesses, Social Media Managers And Freelancers.",
		cta: "Start Exploring.",
	},
	{
		image: "/home1-slider2.jpg",
		title: "Double Your Social Media Engagement In Just One Month",
		subtitle: "How would it feel to have a dedicated team backing your social media efforts? We are committed. ",
		cta: "Join The Adventure.",
	},
	{
		image: "/1729683914_site.jpg",
		title: "Ready To Level Up Your Social Media?",
		subtitle: "Get Your Free Consultation Today!",
		cta: "Capture The Moment",
	},
];

export default function HeroSection() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % slides.length);
		}, 5000); // Change every 5 seconds

		return () => clearInterval(interval);
	}, []);

	const handleNext = () => setIndex((index) =>(index + 1) % slides.length);
	const handlePrev = () => setIndex((index) =>(index - 1 + slides.length) % slides.length);

	return (
		<section className="relative h-[60vh] flex items-center justify-center text-white">
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
			<div className="absolute inset-0 bg-black/40 my-16"></div>

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

			{/*{ Navigation Buttons}*/}
			<div className="absolute inset-0 flex items-center justify-between px-4 z-10">
				<button
					onClick={handleNext}
					className="p-2  bg-pink-500/60 hover:bg-pink-500/80 transition-all rounded-full"
				>
					<BiChevronLeft className="w-6 h-6" />
				</button>
				<button
					onClick={handlePrev}
					className="p-2 bg-pink-500/60 hover:bg-pink-500/80 transition-all rounded-full"
				>
					<BiChevronRight className="w-6 h-6" />
				</button>
			</div>
		</section>
	);
}

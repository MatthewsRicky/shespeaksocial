import React from 'react'
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import OptionsCarousel from "@/components/OptionsCarousel";
import FounderAbout from "@/components/FounderAbout";
import Reviews from "@/components/Reviews";

const Home = () => {
	return (
		<div className="overflow-hidden">
			<HeroSection />
			<ServiceCards />
			<OptionsCarousel />
			<FounderAbout />
			<Reviews />
		</div>
	)
}
export default Home

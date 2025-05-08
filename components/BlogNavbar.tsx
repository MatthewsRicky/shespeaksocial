"use client"

import React, {useState} from 'react'
import Link from "next/link";
import Logo from "@/components/Logo";
import {BiMenu, BiX} from "react-icons/bi";

const BlogNavbar = () => {

	const BlogLinks = [
		{name: "Home", link: "/" },
		{name: "News & Updates", link: "/" },
		{name: "Trending Topics", link: "/" },
		{name: "Digital Marketing", link: "/" },
		{name: "Freelance Tips", link: "/" },
		{name: "How-To-Tips", link: "/" },
		{name: "Opinion", link: "/" },
		{name: "Careers", link: "/" },
	]

	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="relative items-center justify-between mx-auto w-full gap-6 transition-all duration-300">
			<div className="absolute flex flex-col lg:flex-row items-center lg:h-[12vh] h-screen  w-[30%] md:w-[40%] lg:w-screen bg-slate-950">
				<div className="flex">
					<Link href="/" className="z-20">
							<Logo />
					</Link>
					<button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden z-20 flex w-fit p-4 rounded-full m-4 bg-deep-pink/30 hover:bg-deep-pink/80  text-xl text-white font-bold shadow-emerald-950/60 shadow-md">
						{menuOpen ? <BiX /> : <BiMenu />}
					</button>
				</div>

				{BlogLinks.map((link) => (
					<div key={link.name} className="z-10 flex flex-col lg:flex-row justify-center items-center h-fit text-white mx-auto gap-8">

							<Link href={link.link}>{link.name}</Link>
					</div>
				))}

			</div>


		</nav>
	)
}
export default BlogNavbar

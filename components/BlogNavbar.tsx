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
		<nav className="fixed z-20 flex flex-col items-start justify-start mx-auto w-full gap-6 transition-all duration-300">
		<div className={`absolute flex flex-col lg:flex-row items-center lg:h-[12vh] w-[48%] lg:w-screen xl:w-[85%] bg-violet-950/95 lg:text-slate-800 lg:bg-linear-to-r from-pink-50 to-pink-100 ${menuOpen ? 'h-screen' : 'w-full'}`}>
				<div className="flex p-2 justify-between items-center mx-auto my-6">
					<Link href="/" className="flex p-4 z-20">
							<Logo />
					</Link>
					<button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden z-20 flex w-fit p-4 rounded-full m-4 bg-deep-pink/80 hover:bg-deep-pink/100  text-xl text-white font-bold shadow-emerald-950/60 shadow-md">
						{menuOpen ? <BiX /> : <BiMenu />}
					</button>
				</div>
					<ul className={`z-10 flex flex-col lg:flex-row justify-start items-start h-72 mt-20 text-white gap-8 ${menuOpen ? '' : 'hidden'}`}>
						{BlogLinks.map((link) => (

								<Link key={link.name} className="flex items-start justify-start" href={link.link}>{link.name}</Link>
						))}
					</ul>

					<ul className={`z-10 hidden lg:flex lg:flex-row justify-center items-center h-12 mx-auto gap-8`}>
						{BlogLinks.map((link) => (

							<Link key={link.name} className="flex items-start justify-start" href={link.link}>{link.name}</Link>
						))}
					</ul>

			</div>
		</nav>
	)
}
export default BlogNavbar

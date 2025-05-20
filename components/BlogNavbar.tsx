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
		<nav className="fixed z-20 lg:h-32 flex flex-col items-start justify-start lg:items-center lg:justify-center mx-auto w-full gap-6 transition-all duration-300">
		<div className={`shadow-lg shadow-slate-800/50 absolute flex flex-col lg:flex-row items-center justify-center mx-auto lg:h-[12vh] w-[48%] lg:w-[95%] lg:px-4 xl:w-[85%] lg:text-serenade lg:text-sm lg:rounded-xl bg-slate-900/90 ${menuOpen ? 'h-screen' : 'w-screen'}`}>
				<div className="flex p-2 justify-between items-center mx-auto my-6">
					<Link href="/" className="flex p-4 z-20">
							<Logo />
					</Link>
					<button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden z-20 flex w-fit p-3 rounded-full m-4 bg-bright-turquoise hover:bg-yellow-orange text-2xl text-white font-bold shadow-emerald-950/60 shadow-md transition-all duratiom-300">
						{menuOpen ? <BiX /> : <BiMenu />}
					</button>
				</div>
					<ul className={` flex flex-col lg:flex-row justify-start items-start h-72 mt-20 text-razzmataz gap-8 text-lg font-bold ${menuOpen ? 'lg:hidden' : 'hidden'}`}>
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

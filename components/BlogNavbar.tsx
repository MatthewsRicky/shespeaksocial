"use client"

import React, {useState} from 'react'
import Link from "next/link";
import Logo from "@/components/Logo";
import {BiMenu, BiX} from "react-icons/bi";

const BlogNavbar = () => {

	const BlogLinks = [
		{name: "Home", link: "/home" },
		{name: "News & Updates", link: "/home" },
		{name: "Trending Topics", link: "/home" },
		{name: "Digital Marketing", link: "/home" },
		{name: "Freelance Tips", link: "/home" },
		{name: "How-To-Tips", link: "/home" },
		{name: "Opinion", link: "/home" },
		{name: "Careers", link: "/home" },
	]

	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="relative items-center justify-between mx-auto w-full gap-6">
			<div className="absolute flex flex-col h-screen  w-[30%] md:w-[40%] bg-slate-950">
				<div className="flex">
					<Link href="/" className="z-20">
							<Logo />
					</Link>
					<button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden z-20 flex w-fit p-4 rounded-full m-4 bg-deep-pink/80 text-xl text-white font-bold shadow-emerald-950/60 shadow-md">
						{menuOpen ? <BiX /> : <BiMenu />}
					</button>
				</div>

				{BlogLinks.map((link) => (
					<ul key={link.name} className="z-10 flex flex-col lg:flex-row justify-center items-center h-fit text-white mx-auto gap-8">
						<li>
							<Link href={link.link}>{link.name}</Link>
						</li>
					</ul>
				))}

			</div>


		</nav>
	)
}
export default BlogNavbar

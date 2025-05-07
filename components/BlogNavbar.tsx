"use client"

import React, {useState} from 'react'
import Link from "next/link";
import Logo from "@/components/Logo";
import {BiMenu, BiX} from "react-icons/bi";

const BlogNavbar = () => {

	const [menuOpen, setMenuOpen] = useState(false);



	return (
		<nav className="relative items-center justify-between mx-auto w-full gap-6">
			<div className="flex flex-col h-screen  w-[30%] md:w-[40%] bg-slate-950">
				<div className="flex">
					<Link href="/" className="z-20">
							<Logo />
					</Link>
					<button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden z-20 flex w-fit p-4 rounded-full m-4 bg-deep-pink/80 text-xl text-white font-bold shadow-emerald-950/60 shadow-md">
						{menuOpen ? <BiX /> : <BiMenu />}
					</button>
				</div>


				<ul className="absolute z-10 flex flex-col lg:flex-row justify-center items-center h-fit text-white mx-auto gap-8">


					<Link href="/">
						<li>Home</li>
					</Link>
					<Link href="/">
						<li>News & Updates</li>
					</Link>
					<Link href="/">
						<li>Trending Topics</li>
					</Link>
					<Link href="/">
						<li>Digital Marketing</li>
					</Link>
					<Link href="/">
						<li>Freelance Tips</li>
					</Link>
					<Link href="/">
						<li>How-To-Tips</li>
					</Link>
					<Link href="/">
						<li>Opinion</li>
					</Link>
					<Link href="/">
						<li>Careers</li>
					</Link>
				</ul>
			</div>


		</nav>
	)
}
export default BlogNavbar

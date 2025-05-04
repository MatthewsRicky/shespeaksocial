"use client"
import React, {useState} from 'react'

import {BiMenu, BiX} from "react-icons/bi";

import Logo from "@/components/Logo";
import Link from "next/link";

export default function Navbar() {



	const [menuOpen, setMenuOpen] = useState(false);
	const navLinks = [ "about", "blog", "payment", "for-business", "for-individuals", "resources"];
	return (
		<nav className={`relative flex font-bold text-sm bg-linear-to-r from-pink-50
		 90 to-purple-100/90 items-center py-6 justify-between lg:h-32 ${menuOpen ? "h-110 flex  justify-center items-center" : "h-32 lg:-flex"} transition all duration-300`}>




				<div className="absolute flex-col lg:flex justify-between items-center  w-full mx-auto">
					<div className="relative flex w-full items-center justify-between">
						<span className="flex lg:hidden h-fit p-4">
						<Logo />
						</span>
						<button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden z-20 flex w-fit p-4 rounded-full m-4 bg-deep-pink/80 text-xl text-white font-bold shadow-emerald-950/60 shadow-md">
							{menuOpen ? <BiX /> : <BiMenu />}
						</button>
					</div>

					<div className="hidden lg:flex h-24 justify-around items-center w-full text-md mx-auto">

						<span className="hidden md:flex h-fit p-4">
						<Logo />
						</span>

					{navLinks.map((link) => (
						<ul key={link} className="flex items-center justify-center mx-auto gap-2">
							<li className="flex items-center justify-center mx-auto px-2 py-2">
								<Link href={"/" + link}>
									{link}
								</Link>
							</li>
						</ul>
					))}

					<div className="flex flex-col md:flex-row items-center gap-2  justify-center mx-auto">
						<input type="search" className="w-24 text-center flex justify-center rounded-lg shadow-black/30 shadow-lg border-black border-2 border-solid" placeholder="Find Blog" />
						<button type="submit" className=" flex flex-row justify-center items-center bg-deep-pink/80 px-1 shadow-lg shadow-pink-400/70 py-1 rounded-lg">Get in Touch</button>
					</div>

				</div>

				{menuOpen && (
					<div>


						<div className="flex flex-col md:flex-row items-center gap-6 p-4 justify-start mx-auto">



							<div className="flex flex-col lg:hidden bg-pink-100/50 rounded-sm w-full">


								{navLinks.map((link) => (
									<ul key={link} className="flex items-center justify-between mx-auto gap-6 ">
										<li className="flex items-center justify-around mx-auto px-3 py-2">
											<Link href={"/" + link}>
												{link}
											</Link>
										</li>
									</ul>
								))}

								<div className="flex flex-col items-cente gap-2 h-auto  justify-center mx-auto">
									<input type="search" className="rounded-lg shadow-black/30 flex text-centershadow-lg border-black border-2 border-solid" placeholder="Find Blog" />
									<button type="submit" className="bg-deep-pink/80 px-3 shadow-lg shadow-pink-400/70 py-2 text-slate-50 rounded-lg">Get in Touch</button>
								</div>
							</div>
						</div>

					</div>
				)}



			</div>

		</nav>


	)
}


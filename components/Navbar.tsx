"use client"
import React, {useState} from 'react'

import {BiMenu} from "react-icons/bi";

import Logo from "@/components/Logo";
import Link from "next/link";

export default function Navbar() {



	const [menuOpen, setMenuOpen] = useState(false);
	const navLinks = [ "about", "blog", "payment", "for-business", "for Individuals", "resources"];
	return (
		<>

		<nav className={`flex inset-1 font-medium bg-gradient-to-r from-pink-200/90 to-purple-200/90 items-center py-6 justify-between lg:h-32 ${menuOpen ? "h-96" : "h-24 lg:-flex"}`}>

			<div className={`flex justify-around items-center w-full lg:w-[90%] mx-auto px-8`}>

				<Logo />

				{menuOpen && (
					<div>
						<div className={`hidden lg:flex items-center justify-between px-4 lg:w-[80%] mx-auto`}>

							{navLinks.map((link) => (
								<ul key={link} className="flex items-center justify-around mx-auto gap-2">
									<li className="flex items-center justify-around mx-auto px-2 py-2">
										<Link href={"/" + link}>
											{link}
										</Link>
									</li>
								</ul>
							))}

							<div className="flex flex-col md:flex-row items-center gap-2  justify-center mx-auto">
								<input type="search" className="rounded-lg shadow-black/30 shadow-lg border-black border-2 border-solid" placeholder="Find Blog" />
								<button type="submit" className="bg-pink-500 px-3 shadow-lg shadow-pink-400/70 py-2 rounded-lg">Get in Touch</button>
							</div>

						</div>

						<div className="flex flex-col md:flex-row items-center gap-2  justify-center mx-auto">



							<div className="flex flex-col lg:hidden">


								{navLinks.map((link) => (
									<ul key={link} className="flex items-center justify-between mx-auto gap-4">
										<li className="flex items-center justify-around mx-auto px-3 py-2">
											<Link href={"/" + link}>
												{link}
											</Link>
										</li>
									</ul>
								))}

								<div className="flex flex-col items-cente gap-2 h-auto  justify-center mx-auto">
									<input type="search" className="rounded-lg shadow-black/30 shadow-lg border-black border-2 border-solid" placeholder="Find Blog" />
									<button type="submit" className="bg-pink-500 px-3 shadow-lg shadow-pink-400/70 py-2 rounded-lg">Get in Touch</button>
								</div>
							</div>
						</div>

					</div>
				)}


				<button onClick={() => setMenuOpen(!menuOpen)} className="flex p-4 rounded-full m-4 bg-pink-500 shadow-emerald-950/60 shadow-md">
				<span>
					<BiMenu />
				</span>
				</button>
			</div>
		</nav>
</>
	)
}


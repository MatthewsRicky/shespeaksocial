"use client"

import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

	const navLinks = ["Home", "About", "Blog", "For Business", "For Individuals", "Resources"];

	return (
		<>
		<nav>
			<div className="flex items-center justify-between mx-auto">
				<Link href="/">
					<Image src ="/shespeaksocial.png" alt="logo" width={144} height={30} />
				</Link>

				{navLinks.map((link) => (
					<ul key={link} className="flex items-center justify-between mx-auto gap-4">
						<li className="flex items-center justify-around mx-auto px-3 py-2">
							<Link href="/">
								{link}
							</Link>
						</li>
					</ul>
				))}

				<div className="flex items-cente gap-2  justify-center mx-auto">
					<input type="search" className="rounded-lg shadow-black/30 shadow-lg border-black border-2 border-solid" placeholder="Find Blog" />
					<button type="submit" className="bg-pink-500 px-3 shadow-lg shadow-pink-400/70 py-2 rounded-lg">Get in Touch</button>
				</div>

			</div>
		</nav>
</>
	)
}


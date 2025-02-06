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
					<ul key={link} className="flex items-center justify-center mx-auto">
						<li>
							<Link href="/">
								{link}
							</Link>
						</li>
					</ul>
				))}

				<div className="flex items-center justify-center mx-auto">
					<input type="search" placeholder="Find Blog" />
					<button type="submit">Get in Touch</button>
				</div>

			</div>
		</nav>
</>
	)
}


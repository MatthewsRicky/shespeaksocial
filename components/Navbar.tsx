import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

	const navLinks = ["Home", "About", "Blog", "For Business", "How-to Tips"];

	return (
		<>
		<nav>
			<div>
				<Link href="/">
					<Image src ="/shespeaksocial.png" alt="logo" width={144} height={30} />
				</Link>

				{navLinks.map((link) => (
					<ul key={link}>
						<li>
							<Link href="/">
								{link}
							</Link>
						</li>
					</ul>
				))}
			</div>
		</nav>
</>
	)
}


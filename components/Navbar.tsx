"use client"
import React, {useState} from 'react'
import Link from "next/link";
import Image from "next/image";
import {BiMenu} from "react-icons/bi";
import Menu from "@/components/Menu";

export default function Navbar() {

	const navLinks = [ "about", "blog", "payment", "for-business", "for Individuals", "resources"];

	const [menuOpen, setMenuOpen] = useState(false);


	return (
		<>

		<nav className="flex inset-1 font-medium bg-gradient-to-r from-pink-200 to-red-200 h-96 items-center py-6 justify-center lg:h-32">

			<button onClick={() => setMenuOpen(!menuOpen)} className="flex p-4 rounded-full m-4 bg-pink-500 shadow-emerald-950/60 shadow-md">
				<span>
					<BiMenu />
				</span>
			</button>
			<Menu />
		</nav>
</>
	)
}


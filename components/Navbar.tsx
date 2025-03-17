"use client"
import React, {useState} from 'react'

import {BiMenu} from "react-icons/bi";
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";

export default function Navbar() {



	const [menuOpen, setMenuOpen] = useState(false);


	return (
		<>

		<nav className={`flex inset-1 font-medium bg-gradient-to-r from-pink-100/90 to-green-100/60 h-96 items-center py-6 justify-between lg:h-32 ${menuOpen}h-24`}>

			<Logo />

			{menuOpen && (
				<Menu />
			)}


			<button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex p-4 rounded-full m-4 bg-pink-500 shadow-emerald-950/60 shadow-md">
				<span>
					<BiMenu />
				</span>
			</button>
		</nav>
</>
	)
}


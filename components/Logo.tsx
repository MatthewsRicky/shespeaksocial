import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
	return (
		<div className="flex justify-center items-center h-full">
			<Link href="/">
				<Image src ="/shespeaksocial.png" alt="logo" width={200} height={1000}  />
			</Link>
		</div>
	)
}
export default Logo

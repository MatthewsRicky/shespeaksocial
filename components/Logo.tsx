import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
	return (
		<div className="flex justify-center items-center h-full">
			<Link href="/">
				<Image src ="/shespeaksocial.png" alt="logo" width={144} height={60}  />
			</Link>
		</div>
	)
}
export default Logo

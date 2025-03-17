import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
	return (
		<div>
			<Link href="/">
				<Image src ="/shespeaksocial.png" alt="logo" width={144} height={30}  className="!flex"/>
			</Link>
		</div>
	)
}
export default Logo

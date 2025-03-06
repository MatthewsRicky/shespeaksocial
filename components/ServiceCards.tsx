import React from 'react'
import Image from "next/image";

const ServiceCards = () => {
	return (
		<div>
			<header>
				<h1>How can I help you</h1>
				</header>
				<div>
					<div>
						<Image src="/make-money.png" alt="make-money icon" width={50} height={50} />
						<div>
							<h2>Make More Money</h2>
							<p>We help free up your time so you can focus on what you do best - running your business.</p>
						</div>
					</div>
					<div></div>
					<div></div>
					<div></div>
				</div>

		</div>
	)
}
export default ServiceCards

import React from 'react'
import Form from "next/form";

const Subscribe = () => {
	return (
		<div>
			<Form action="">
				<input name="email" type="email" placeholder="Email" />
				<button type="submit">Subscribe</button>
			</Form>

		</div>
	)
}
export default Subscribe

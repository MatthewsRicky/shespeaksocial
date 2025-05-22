import React from 'react'
import Form from "next/form";

const Subscribe = () => {
	return (
		<div>
			<h1 className="text-xl text-center font-bold">Subscribe To Updates</h1>
			<Form action="">
				<input name="email" type="email" placeholder="Email" className="flex w-full bg-white px-4 py-3 rounded-md border border-gray-200 shadow-md shadow-slate-900/30 my-6" />
				<button type="submit" className="flex text-center text-lg font-bold w-full bg-youtube text-white items-center justify-center py-3 rounded-lg shadow-md shadow-slate-900/30">Subscribe</button>
			</Form>
			<div className="flex items-center justify-start my-10 gap-2">
				<input type="checkbox" className="p-4"  />
				<label htmlFor="select">
					<p className="text-xs font-medium text-slate-700">By signing up you agree to our terms and our Privacy Policy agreement.</p>
				</label>
			</div>

		</div>
	)
}
export default Subscribe

import React from 'react'
import Form from "next/form";

const Subscribe = () => {
	return (
		<div className="border-solid border-gray-300 border-2 p-1 bg-white rounded-md">
			<Form action="" className="border-solid border-2 border-gray-500/60 px-4 py-6 shadow-lg rounded-sm shadow-slate-900/30 bg-cararra">
				<h1 className="text-xl text-center font-bold">Subscribe To Updates</h1>
				<input name="email" type="email" placeholder="Email" className="flex w-full bg-white px-4 py-3 rounded-md border border-gray-200 shadow-md shadow-slate-900/30 my-6" />
				<button type="submit" className="flex text-center text-lg font-bold w-full bg-youtube text-white items-center justify-center py-3 rounded-md shadow-md shadow-slate-900/30">Subscribe</button>
				<div className="flex items-center justify-start my-10 gap-2">
					<input type="checkbox" className="p-4"  />
					<label htmlFor="select">
						<p className="text-xs font-medium text-slate-700">By signing up you agree to our terms and our Privacy Policy agreement.</p>
					</label>
				</div>
			</Form>


		</div>
	)
}
export default Subscribe

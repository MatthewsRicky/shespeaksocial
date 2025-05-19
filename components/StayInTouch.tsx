import React from 'react'
import {BsFacebook, BsInstagram, BsPinterest, BsTwitter, BsVimeo, BsYoutube} from "react-icons/bs";

const StayInTouch = () => {
	return (
		<main>
			<h1 className="text-slate-900 mb-8 underline underline-offset-8 w-full font-bold leading-none">Stay In Touch</h1>
			<div className="grid grid-cols-1 grid-rows-6 w-full gap-3">
				<span className="flex w-full items-center justify-start gap-3 mx-auto bg-facebook px-3 py-2 font-medium text-white rounded-md shadow-lg shadow-facebook/50"><BsFacebook /> <h2>Facebook</h2></span>
				<span className="flex w-full items-center justify-start gap-3 bg-black mx-auto px-3 py-2 font-medium text-white rounded-md shadow-lg shadow-black/50"><BsTwitter /> <h2>Twitter</h2></span>
				<span className="flex w-full items-center justify-start gap-3 mx-auto bg-pinterest px-3 py-2 font-medium text-white rounded-md shadow-lg shadow-pinterest/50"><BsPinterest /> <h2>Pinterest</h2></span>
				<span className="flex w-full items-center justify-start gap-3 mx-auto bg-instagram px-3 py-2 font-medium text-white rounded-md shadow-lg shadow-instagram/50"><BsInstagram /> <h2>Instagram</h2></span>
				<span className="flex w-full items-center justify-start gap-3 mx-auto bg-youtube px-3 py-2 font-medium text-white rounded-md shadow-lg shadow-youtube/50"><BsYoutube /> <h2>YouTube</h2></span>
				<span className="flex w-full items-center justify-start gap-3 mx-auto bg-vimeo px-3 py-2 font-medium text-white rounded-md shadow-lg shadow-vimeo/50"><BsVimeo /> <h2>Vimeo</h2></span>
			</div>
		</main>

	)
}
export default StayInTouch

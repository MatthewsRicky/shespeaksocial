import React from 'react';
import BlogSideBar from "@/components/BlogSideBar";


const Blog = () => {
	return (
		<main className="flex w-full items-center my-auto justify-start">
			<div>BloG Posts</div>
			<section className="hidden lg:flex flex-">
				<BlogSideBar />
			</section>

		</main>
	)
}
export default Blog

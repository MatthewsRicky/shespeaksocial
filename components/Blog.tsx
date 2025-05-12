import React from 'react';
import BlogSideBar from "@/components/BlogSideBar";
import {posts} from "@/utils/constants";
import Image from "next/image";


const Blog = () => {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-center justify-center mx-auto overflow-x-hidden lg:mt-48">
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6">
				{posts.map((post) => (
					<div key={post.id} className="relative flex flex-col items-center justify-center w-full gap-2 h-96">
						<Image src={post.imageUrl} alt={post.imageAlt} width={200} height={200} className="flex"/>
						<span>{post.imageTitle}</span>
						<h1>{post.title}</h1>
						<span>
							<h2>{post.author}</h2>
							<h3>{post.date}</h3>
						</span>
						<p>{post.article}</p>
					</div>

				))}
				<div className="hidden w-full h-fit lg:flex">
					<BlogSideBar />
				</div>
			</section>


		</main>
	)
}
export default Blog

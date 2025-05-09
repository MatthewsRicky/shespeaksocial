import React from 'react';
import BlogSideBar from "@/components/BlogSideBar";
import {posts} from "@/utils/constants";
import Image from "next/image";


const Blog = () => {
	return (
		<main className="flex w-full items-center my-48 justify-center mx-auto">
			<section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center h-[40vh] gap-6">
				{posts.map((post) => (
					<div key={post.id} className="relative flex flex-col items-center justify-center w-full gap-2">
						<Image src={post.imageUrl} alt={post.imageAlt} width={500} height={200} className="flex"/>
						<span>{post.imageTitle}</span>
						<h1>{post.title}</h1>
						<span>
							<h2>{post.author}</h2>
							<h3>{post.date}</h3>
						</span>
						<p>{post.article}</p>
					</div>

				))}
				<BlogSideBar />
			</section>

		</main>
	)
}
export default Blog

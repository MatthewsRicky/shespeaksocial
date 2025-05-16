import React from 'react';
import BlogSideBar from "@/components/BlogSideBar";
import {posts} from "@/utils/constants";
import Image from "next/image";


const Blog = () => {
	return (
		<main className="relative flex">
      <section className="lg:w-[67%] grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center mt-48 lg:mt-32">
	      {posts.map((post) => (
		      <div key={post.id} className="relative flex flex-col items-center justify-center h-full  bg-linear-to-b from-pink-50 to-pink-100 sm:mx-4 w-[95%] mx-auto rounded-md gap-4">
			      <Image src={post.imageUrl} alt={post.imageAlt} width={500} height={500} className="flex w-[70%] h-[70%]"/>
			      <span>{post.imageTitle}</span>
			      <h1>{post.title}</h1>
			      <span>
							<h2>{post.author}</h2>
							<h3>{post.date}</h3>
						</span>
			      <p>{post.article}</p>
		      </div>

	      ))}
      </section>
				<div className="hidden lg:fixed right-0 w-[30%] h-fit lg:flex">
					<BlogSideBar />
				</div>



		</main>
	)
}
export default Blog

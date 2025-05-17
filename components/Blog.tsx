import React from 'react';
import BlogSideBar from "@/components/BlogSideBar";
import {posts} from "@/utils/constants";
import Image from "next/image";


const Blog = () => {
	return (
		<main className="relative flex items-center justify-center">
      <section className="lg:w-[67%] grid md:grid-cols-2 gap-8 items-center justify-center mt-48 lg:mt-32">
	      {posts.map((post) => (
		      <div key={post.id} className="relative flex flex-col items-center justify-between h-full sm:mx-4 w-[95%] mx-auto rounded-md gap-4">
			      <div className="relative flex items-center justify-between w-full h-64">
				      <Image src={post.imageUrl} alt={post.imageAlt} width={500} height={500} className="absolute flex w-full justify-start h-full" />
				      <span className="absolute right-2 bottom-8 text-slate-100 bg-deep-pink/70 px-3 py-2 rounded-md">{post.imageTitle}</span>
			      </div>

			      <h1 className="text-xl font-bold text-center">{post.title}</h1>
			      <span className="flex gap-4 items-center ml-o -w-full">
							<h2 className="font-semibold">{post.author},</h2>
							<h3>{post.date}</h3>
						</span>
			      <p>{post.article}</p>
		      </div>

	      ))}
      </section>
				<div className="hidden right-0 lg:w-[22%] h-fit lg:flex">
					<BlogSideBar />
				</div>



		</main>
	)
}
export default Blog

import React from 'react';
import BlogSideBar from "@/components/BlogSideBar";
import {posts} from "@/utils/constants";
import Image from "next/image";


const Blog = () => {
	return (
		<main className="relative flex items-center gap-8 justify-center lg:w-[95%]">
      <section className="md:w-[70%] lg:w-[65%] grid md:grid-cols-2 gap-8 items-center justify-center mt-48 lg:my-32">
	      {posts.map((post) => (
		      <div key={post.id} className="relative bg-white shadow-md shadow-violet-300 flex flex-col items-center justify-between h-full w-[95%] text-start mx-auto rounded-md gap-4">
			      <div className="relative flex items-center justify-start text-start w-full h-64 rounded-lg">
				      <Image src={post.imageUrl} alt={post.imageAlt} width={500} height={500} className="absolute flex w-full justify-start h-full rounded-md" />
				      <span className="absolute left-0 bottom-0 text-slate-100 bg-slate-900 hover:bg-deep-pink/70 px-2 py-1 rounded-md">{post.imageTitle}</span>
			      </div>
			      <div className="flex flex-col items-start justify-start gap-4 p-1 ">
				      <h1 className="text-xl font-bold ">{post.title}</h1>
				      <span className="flex gap-4 items-center ml-o -w-full">
							<h2 className="font-semibold">{post.author},</h2>
							<h3>{post.date}</h3>
						</span>
				      <p>{post.article}</p>
			      </div>
		      </div>
	      ))}
      </section>
				<div className="hidden right-0 lg:w-[30%] xl:w-[25%] h-screen lg:flex">
					<BlogSideBar />
				</div>
		</main>
	)
}
export default Blog

import React from 'react';
import BlogSideBar from "@/components/BlogSideBar";
import {posts} from "@/utils/constants";
import Image from "next/image";


const Blog = () => {
	return (
		<main className="relative flex items-start gap-2 justify-center lg:w-[90%] xl:w-[85%]">
      <section className="md:w-[70%] lg:w-[65%] xl:w-[50%] grid md:grid-cols-2 gap-1 items-center justify-center mt-48 lg:my-32">
	      {posts.map((post) => (
		      <div key={post.id} className="relative bg-white shadow-md shadow-slate-800 flex flex-col items-center justify-between h-[85%] w-[90%] xl:h-[95%] text-start mx-auto rounded-md  gap-4">
			      <div className="relative flex items-center justify-start text-start w-full h-64 rounded-lg">
				      <Image src={post.imageUrl} alt={post.imageAlt} width={400} height={300} className="absolute flex w-full justify-start h-full rounded-md" />
				      <span className="absolute left-0 bottom-0 text-slate-100 bg-slate-900 hover:bg-razzmataz text-sm px-2 py-1 rounded-sm">{post.imageTitle}</span>
			      </div>
			      <div className="flex flex-col items-start justify-start gap-4 xl:gap-1 p-1 text-sm xl:text-md">
				      <h1 className="text-lg font-bold ">{post.title}</h1>
				      <span className="flex gap-4 items-center ml-o -w-full">
							<h2 className="font-semibold text-xs">{post.author},</h2>
							<h3>{post.date}</h3>
						</span>
				      <p>{post.article}</p>
			      </div>
		      </div>
	      ))}
      </section>
			<div className="hidden lg:w-[30%] xl:w-[25%] lg:flex justify-start items-start">
				<BlogSideBar />
			</div>
		</main>
	)
}
export default Blog

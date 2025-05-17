import React from 'react';
import BlogSideBar from "@/components/BlogSideBar";
import {posts} from "@/utils/constants";
import Image from "next/image";


const Blog = () => {
	return (
		<main className="relative flex items-center gap-8 justify-center">
      <section className="lg:w-[60%] xl:w-[50%] grid md:grid-cols-2 gap-8 items-center justify-center mt-48 lg:mt-32">
	      {posts.map((post) => (
		      <div key={post.id} className="relative bg-liniear from-pink-50 to-violet-200 shadow-md flex flex-col items-center justify-between h-full sm:mx-4 w-full mx-auto rounded-md gap-4">
			      <div className="relative flex items-center justify-start text-start w-full h-64 rounded-lg">
				      <Image src={post.imageUrl} alt={post.imageAlt} width={500} height={500} className="absolute flex w-full justify-start h-full rounded-md" />
				      <span className="absolute left-0 bottom-0 text-slate-100 bg-slate-900 hover:bg-deep-pink/70 px-2 py-1 rounded-md">{post.imageTitle}</span>
			      </div>
			      <h1 className="text-xl font-bold ">{post.title}</h1>
			      <span className="flex gap-4 items-center ml-o -w-full">
							<h2 className="font-semibold">{post.author},</h2>
							<h3>{post.date}</h3>
						</span>
			      <p>{post.article}</p>
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

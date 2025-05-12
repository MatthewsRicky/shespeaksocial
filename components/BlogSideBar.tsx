import React from 'react'
import {posts} from "@/utils/constants";
import Image from "next/image";

const BlogSideBar = () => {
	return (
		<div className="max-h-fit flex flex-col items-center justify-center mx-auto bg-slate-700  w-full text-white">
				{posts.map((post) => (
					<section key={post.id} className="flex flex-col items-center justify-center W-full">
						<Image src={post.imageUrl} alt={post.imageAlt} width={400} height={400} />
					</section>
				))}
		</div>
	)
}
export default BlogSideBar

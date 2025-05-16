import React from 'react'
import {posts} from "@/utils/constants";
import Image from "next/image";

const BlogSideBar = () => {
	return (
		<div className="h-fit flex flex-col gap items-center justify-center mx-auto  mt-32 ">
				{posts.map((post) => (
					<section key={post.id} className="flex flex-col items-center justify-cente rw-full text-white bg-slate-700">
						<Image src={post.imageUrl} alt={post.imageAlt} width={400} height={400} className="flex" />
					</section>
				))}
		</div>
	)
}
export default BlogSideBar

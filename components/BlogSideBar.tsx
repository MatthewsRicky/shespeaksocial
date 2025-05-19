import React from 'react'

import StayInTouch from "@/components/StayInTouch";
import OurPick from "@/components/OurPick";
import Hot from "@/components/Hot";
import Subscribe from "@/components/Subscribe";
import DontMiss from "@/components/DontMiss";


const BlogSideBar = () => {
	return (
		<div className="flex scroll-auto flex-col gap items-center justify-between h-screen mt-32 px-2 mx-2">
			<div className="flex  flex-col h-full justify-start gap-6">
				<div><DontMiss /></div>
				<div><StayInTouch /> </div>
				<div><OurPick /></div>
				<div><Hot /></div>
				<div><Subscribe /></div>
			</div>

		</div>
	)
}
export default BlogSideBar

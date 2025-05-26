import Posts from '@/components/Posts'
import React, {Suspense} from 'react'

const Page = () => {
	return (
		<main className="h-screen">
			<Suspense fallback={<div>Loading...</div>}>
				<Posts />
			</Suspense>

		</main>
	)
}
export default Page

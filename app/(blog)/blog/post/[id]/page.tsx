import React from 'react'

async function Page() {
	const response = await fetch(`${process.env.CURRENTS_API_ENDPOINT}?apiKey=${process.env.CURRENTS_API_KEY}/1`)
	const post = await response.json();
	return (
		<main className="flex h-screen ">
			<h1 key={post.id} className="flex items-center justify-center mx-auto text-xl font-bold mt-48">{post.title}</h1>
		</main>
	)
}

export default Page

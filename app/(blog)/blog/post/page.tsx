

export default async function Page() {


	const data = await fetch(`${process.env.CURRENTS_API_ENDPOINT}?apiKey=${process.env.CURRENTS_API_KEY}`)
	const posts= await data.json()


	return (
		<div className="flex h-screen">
			{Array.isArray(posts) && posts.map((post) => (
				<div key={post.id} className="flex items-center justify-center text-black mt-48 flex-col">
					<h1>{post.title}</h1>
					<p>{post.description}</p>
				</div>
			))}
		</div>
	)
}

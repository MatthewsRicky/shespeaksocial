

export default async function Page() {


	const data = await fetch('https://api.currentsapi.services/v1/latest-news?category=${category}&apiKey=${CURRENTS_API_KEY}')
	const post = await data.json()

	console.log(post)
	return (
		<div className="flex h-screen">
			{post.map((post) => (
				<div key={post.id}>
					<h1>{post.title}</h1>
				</div>
			))}
		</div>
	)
}

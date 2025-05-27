

export default async function Page() {


	const data = await fetch('https://api.currentsapi.services/v1/latest-news/apiKey=${CURRENTS_API_KEY}')
	const posts : [] = await data.json()

	console.log(typeof posts, posts);

	return (
		<div className="flex h-screen">
			{Array.isArray(posts) && posts.map((post) => (
				<div key={post.id}>
					<h1>{post.title}</h1>
				</div>
			))}
		</div>
	)
}

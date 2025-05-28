export default async function Page({ params, }:{params: Promise<{id : string}>}) {
	const { id } = await params;

	const response = await fetch(`${process.env.CURRENTS_API_ENDPOINT}/${id}?apiKey=${process.env.CURRENTS_API_KEY}`)

	if (!response.ok) {
		console.error('Fetch failed:', response.status, response.statusText);
	}


	console.log(response)

		const { post } = await response.json();
		console.log(post);


	return (
		<main className="flex h-screen ">
			{Array.isArray(post) && post.map((post) => (
				<h1 key={post.id} className="flex items-center justify-center mx-auto text-xl font-bold mt-48">{post.body}</h1>
			))}

		</main>
	)
}

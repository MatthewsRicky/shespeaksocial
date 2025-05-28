
import Link from "next/link";

export default async function Posts() {
	await new Promise(resolve => setTimeout(resolve, 1000));
	const response = await fetch(`${process.env.CURRENTS_API_ENDPOINT}?apiKey=${process.env.CURRENTS_API_KEY}`)
	const {news}= await response.json()
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 m-2 grid-rows-10 w-[95%] h-full ">
			{Array.isArray(news) && news.map((post ) => (
				<div key={post.id}>
					<Link href={`/blog/post/${post.id}`}  className="flex items-center bg-serenade justify-center text-black gap-4 flex-col p-2">
						<h1 className="text-md font-bold leading-6">{post.title}</h1>
						<p className="text-sm font-regular leading-6">{post.description}</p>
					</Link>

				</div>
			))}
		</div>
	)
}

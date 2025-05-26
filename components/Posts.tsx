// components/NewsList.tsx
"use client"
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";

type NewsArticle = {
	id: string;
	title: string;
	description: string;
	url: string;
	image: string;
	published: string;
	language: string;
	category: string;
	author?: string;
};

export default function Post() {
	const [articles, setArticles] = useState<NewsArticle[]>([]);

	useEffect(() => {
		fetch('https://api.currentsapi.services/v1/latest-news')
			.then(res => res.json())
			.then(data => setArticles(data.news || []));

		console.log(articles);
	}, []);

	return (
		<div>
			<h2 className="text-xl font-bold">Latest News</h2>
			<ul>
				{articles.map(article => (

					<li key={article.id} className=" mb-4 flex bg-cararra justify-center items-center gap-6">
						<Link href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
							{article.title}
						</Link>
						<Image src={article.image} alt="pic" width={200} height={200} />
						<h2>{article.author}</h2>
						<p>{article.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

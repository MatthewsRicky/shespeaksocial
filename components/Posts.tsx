// components/NewsList.tsx
"use client"
import { useEffect, useState } from 'react';

type NewsArticle = {
	id: string;
	title: string;
	description: string;
	url: string;
	image: string;
	published: string;
};

export default function Post() {
	const [articles, setArticles] = useState<NewsArticle[]>([]);

	useEffect(() => {
		fetch('/api/news?category=technology')
			.then(res => res.json())
			.then(data => setArticles(data.news || []));
	}, []);

	return (
		<div>
			<h2 className="text-xl font-bold">Latest News</h2>
			<ul>
				{articles.map(article => (
					<li key={article.id} className="mb-4">
						<a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
							{article.title}
						</a>
						<p>{article.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

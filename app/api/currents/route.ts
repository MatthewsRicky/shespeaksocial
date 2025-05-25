

import type { NextApiRequest, NextApiResponse } from 'next';

type NewsArticle = {
	id: string;
	title: string;
	description: string;
	url: string;
	author: string;
	image: string;
	language: string;
	category: string[];
	published: string;
};

type CurrentsApiResponse = {
	status: string;
	news: NewsArticle[];
	message?: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<CurrentsApiResponse | { error: string }>
) {
	const { category = 'world' } = req.query;

	const apiKey = process.env.CURRENTS_API_KEY;
	if (!apiKey) {
		return res.status(500).json({ error: 'Missing Currents API key' });
	}

	const url = `https://api.currentsapi.services/v1/latest-news?category=${category}&apiKey=${apiKey}`;

	try {
		const response = await fetch(url);
		const data: CurrentsApiResponse = await response.json();

		if (!response.ok) {
			return res
				.status(response.status)
				.json({ error: data.message || 'Failed to fetch news' });
		}

		res.status(200).json(data);
	} catch (error) {
		console.error('Error fetching news:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}

import React from 'react'
import { NextResponse} from "next/server";

export async function POST() {
	const PESAPAL_URL = process.env.PESAPAL_URL;

	const consumerKey = process.env.CONSUMER_KEY;
	const consumerSecret = process.env.CONSUMER_SECRET;

	const authPayload = {
		consumer_key: consumerKey,
		consumer_secret: consumerSecret,
	};

	try {
		const response = await fetch(PESAPAL_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},

			const data = await response.json();
			return NextResponse.json(data);
		} catch (error) {
			return NextResponse.json({error: 'Failed to fetch token'}, (status: 500));
		})
	}
}



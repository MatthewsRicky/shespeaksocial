import { NextResponse } from 'next/server';

export async function POST(): Promise<NextResponse> {
	const PESAPAL_URL = "https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken"; // Sandbox URL

	const consumerKey: string | undefined = process.env.PESAPAL_CONSUMER_KEY;
	const consumerSecret: string | undefined = process.env.PESAPAL_CONSUMER_SECRET;

	if (!consumerKey || !consumerSecret) {
		return NextResponse.json({ error: "Missing Pesapal API credentials" }, { status: 500 });
	}

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
			body: JSON.stringify(authPayload),
		});

		if (!response.ok) {
			throw new Error(`Pesapal API error: ${response.statusText}`);
		}

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: (error as Error).message }, { status: 500 });
	}
}

import {NextResponse} from "next/server";

export async function POST(req: Request) {
	try {
		const { amount, email, phoneNumber, currency, description } = await req.json();

		const payload = {
			id: Math.floor(Math.random() * 100000).toString(), // Unique Order ID
			amount,
			currency: currency || "KES", // Default currency KES (Kenyan Shilling)
			description,
			callback_url: "https://yourwebsite.com/payment-success",
			notification_id: process.env.PESAPAL_IPN_ID, // IPN ID from Pesapal
			email,
			phone_number: phoneNumber,
			payment_method: "M-PESA,VISA,PAYPAL", // ✅ Include supported methods
		};

		const response = await fetch(`${BASE_URL}/Transactions/SubmitOrderRequest`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer YOUR_AUTH_TOKEN`, // Get a valid auth token
			},
			body: JSON.stringify(payload),
		});

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

"use client";

import { useState } from "react";

export default function PaymentPage() {
	const [authToken, setAuthToken] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

	// Step 1: Get Pesapal Auth Token
	const getAuthToken = async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch("/api/pesapal/auth", { method: "POST" });
			const data = await response.json();
			if (!response.ok) throw new Error(data.error || "Failed to fetch token");

			setAuthToken(data.token);
		} catch (err) {
			setError((err as Error).message);
		} finally {
			setLoading(false);
		}
	};

	// Step 2: Initiate Payment
	const initiatePayment = async () => {
		if (!authToken) return setError("Get the Auth Token first!");

		setLoading(true);
		setError(null);
		try {
			const response = await fetch("/api/pesapal/payment", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${authToken}`,
				},
				body: JSON.stringify({
					amount: 10.0, // Amount in USD or KES
					currency: "KES",
					description: "Test Payment",
					callbackUrl: "https://yourwebsite.com/payment-success",
					email: "user@example.com",
					phoneNumber: "+254712345678",
				}),
			});

			const data = await response.json();
			if (!response.ok) throw new Error(data.error || "Payment failed");

			setPaymentUrl(data.redirect_url);
		} catch (err) {
			setError((err as Error).message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
			<h1 className="text-2xl font-bold mb-4">Pesapal Payment</h1>

			<button
				onClick={getAuthToken}
				disabled={loading}
				className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
			>
				{loading ? "Getting Token..." : "Get Pesapal Token"}
			</button>

			{authToken && <p className="mt-3 text-green-600">✅ Token Received</p>}
			{error && <p className="mt-3 text-red-500">❌ {error}</p>}

			<button
				onClick={initiatePayment}
				disabled={!authToken || loading}
				className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
			>
				{loading ? "Processing..." : "Pay Now"}
			</button>

			{paymentUrl && (
				<div className="mt-4">
					<p className="text-blue-600">🔗 Payment Link Ready:</p>
					<a
						href={paymentUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 underline"
					>
						Click here to Pay
					</a>
				</div>
			)}
		</div>
	);
}

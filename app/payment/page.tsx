"use client";

import { useState } from "react";

export default function PaymentPage() {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
	const [paymentMethod, setPaymentMethod] = useState<string>("");

	const initiatePayment = async () => {
		setLoading(true);
		setError(null);
		setPaymentUrl(null);

		try {
			const response = await fetch("/api/pesapal/payment", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					amount: 10.0, // Change amount
					currency: "KES",
					description: "Test Payment",
					email: "user@example.com",
					phoneNumber: "+254704580875",
					paymentMethod, // M-Pesa, Visa, PayPal
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
			<h1 className="text-2xl font-bold mb-4">Choose Payment Method</h1>

			<select
				value={paymentMethod}
				onChange={(e) => setPaymentMethod(e.target.value)}
				className="w-full p-2 border rounded"
			>
				<option value="">Select a Payment Method</option>
				<option value="M-Pesa">M-Pesa</option>
				<option value="Visa">Visa / MasterCard</option>
				<option value="PayPal">PayPal</option>
			</select>

			<button
				onClick={initiatePayment}
				disabled={loading || !paymentMethod}
				className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
			>
				{loading ? "Processing..." : "Pay Now"}
			</button>

			{error && <p className="mt-3 text-red-500">❌ {error}</p>}

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

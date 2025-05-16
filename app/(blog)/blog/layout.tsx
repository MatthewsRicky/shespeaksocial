import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";

import React from "react";
import BlogNavbar from "@/components/BlogNavbar";
import BlogFooter from "@/components/BlogFooter";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Blog",
	description: "This blog is attached to the shespeaksocial.com website." +
		" Educational services available as well as custom made brand campaigns,"
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div>
					<BlogNavbar />
					{children}
					<BlogFooter />
				</div>
			</body>
		</html>
	);
}

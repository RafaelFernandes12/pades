"use client";
import type { Metadata } from "next";
import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  createHttpLink,
} from "@apollo/client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:4090/graphql",
});

// Middleware to add the Authorization header
const authLink = setContext((_, { headers }) => {
  // Replace with your logic to get the token
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjk1MSwiaWF0IjoxNzUzMTEzMTYxLCJleHAiOjE3NTMxMTYxNjF9.R7dTtW8DCKz50fzY4q61pp5CjoPYd2Lf--ZBqH9WroU";
  return {
    headers: {
      ...headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
});
export const client = new ApolloClient({
  uri: "http://localhost:4090/graphql", // Change this to your GraphQL endpoint
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
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
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}

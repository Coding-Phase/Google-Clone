// Server Side Data Fetching

import WebSearchResult from "@/components/WebSearchResult";
import Link from "next/link";

export default async function WebSearchPage({ searchParams }) {
	const SearchQuery = searchParams.searchTerm;
	const startIndex = Number(searchParams.start || "1");

	await new Promise((resolve) => setTimeout(resolve, 1500)); // Wait 2 seconds then fetch data

	const response = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_GOOGLE_CONTEXT_KEY}&q=${SearchQuery}&start=${startIndex}`
	);

	if (!response.ok) {
		throw new Error("Something went wrong");
	}

	const data = await response.json();

	if (!data) {
		return (
			<div className="flex flex-col justify-center items-center pt-10">
				<h1 className="text-3xl mb-4">No results found</h1>
				<p className="text-xl">
					Try searching for something else or go back to the homepage{" "}
					<Link href="/" className="text-blue-500">
						Home
					</Link>
				</p>
			</div>
		);
	}

	return <>{data && <WebSearchResult results={data} />}</>;
}

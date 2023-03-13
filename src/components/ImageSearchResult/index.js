/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Pagination from "../Pagination";

export default function ImageSearchResult({ results }) {
	return (
		<div className="pb-24 mt-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-5">
				{results.items.map((result, index) => (
					<div key={index} className="mb-8">
						<div className="group">
							<Link href={result.image.contextLink}>
								<img
									src={result.link}
									alt={result.title}
									className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
								/>
							</Link>
							<Link href={result.image.contextLink}>
								<h2 className="text-gray-800 truncate group-hover:underline text-xl">
									{result.title}
								</h2>
							</Link>
							<Link href={result.image.contextLink}>
								<p className="group-hover:underline text-gray-600 text-sm">
									{result.displayLink}
								</p>
							</Link>
						</div>
					</div>
				))}
				<Pagination />
			</div>
		</div>
	);
}

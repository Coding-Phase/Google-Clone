"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

export default function Pagination() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get("searchTerm");
	const startIndex = Number(searchParams.get("start") || "1");

	return (
		<div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
			{startIndex > 10 && (
				<Link
					href={`${pathname}?searchTerm=${searchTerm}&start=${
						startIndex - 10
					}`}>
					<div className="flex cursor-pointer items-center hover:underline">
						<BsChevronDoubleLeft className="h-5" />
						<span>Prev</span>
					</div>
				</Link>
			)}
			{startIndex <= 90 && (
				<Link
					href={`${pathname}?searchTerm=${searchTerm}&start=${
						startIndex + 10
					}`}>
					<div className="flex cursor-pointer items-center hover:underline">
						<BsChevronDoubleRight className="h-5" />
						<span>Next</span>
					</div>
				</Link>
			)}
		</div>
	);
}

"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { BiImage } from "react-icons/bi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchHeaderOptions() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get("searchTerm");

	const selectTab = (tab) => {
		router.push(
			`/search/${tab === "Image" ? "image" : "web"}?searchTerm=${searchTerm}`
		);
	};

	return (
		<div className="flex space-x-2 select-none border-b-2 w-full justify-center lg:justify-start lg:pl-52 text-gray-500 text-sm">
			<div
				onClick={() => selectTab("All")}
				className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
					pathname === "/search/web" && "!text-blue-600 !border-blue-600"
				}`}>
				<AiOutlineSearch className="text-md" />
				<p>All</p>
			</div>

			<div
				onClick={() => selectTab("Image")}
				className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
					pathname === "/search/image" && "!text-blue-600 !border-blue-600"
				}`}>
				<BiImage className="text-md" />
				<p>Images</p>
			</div>
		</div>
	);
}

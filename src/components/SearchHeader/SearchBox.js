"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

export default function SearchBox() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const searchQuery = searchParams.get("searchTerm");
	const [term, setTerm] = useState(searchQuery || "");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!term.trim()) return;
		router.push(`/search/web?searchTerm=${term}`);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center border border-gray-200 rounded-full shadow-lg px-6 py-2 ml-10 mr-5 flex-grow max-w-3xl">
			<input
				type="text"
				value={term}
				onChange={(e) => setTerm(e.target.value)}
				className="w-full focus:outline-none "
			/>
			<RxCross2
				onClick={() => setTerm("")}
				className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
			/>
			<BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
			<AiOutlineSearch
				onClick={handleSubmit}
				className="text-2xl hodden sm:inline-flex text-blue-500 cursor-pointer"
			/>
		</form>
	);
}

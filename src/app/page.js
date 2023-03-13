import HomeHeader from "@/components/HomeHeader/page";
import HomeSearch from "@/components/HomeSearch/page";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<HomeHeader />

			<div className="flex flex-col items-center mt-24">
				<Image src="/google.png" alt="" width={300} height={100} />
				<HomeSearch />
			</div>
		</>
	);
}

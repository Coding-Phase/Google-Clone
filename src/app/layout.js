import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
	title: "Google Clone",
	description: "Created by Vishal Thakur",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen">
				{children}
				<Footer />
			</body>
		</html>
	);
}

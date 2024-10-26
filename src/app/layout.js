import "./globals.css";

export const metadata = {
	title: "Global Buzz",
	description: "Global Buzz is a platform for news",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="antialiased">
				{children}
			</body>
		</html>
	);
}

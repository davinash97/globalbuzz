"use client";

import { useEffect, useState } from "react";
import FilmStripChild from "./components/FilmStrip_Child";

const categories = [
	{ name: "Top-Headlines", file: "headline.json" },
	{ name: "Business", file: "business.json" },
	{ name: "Finance", file: "finance.json" },
	{ name: "Education", file: "education.json" },
	{ name: "Technology", file: "technology.json" },
	{ name: "Innovation", file: "innovation.json" },
	{ name: "Travel", file: "travel.json" },
	{ name: "Culture", file: "culture.json" },
];

export default function Home() {
	const [newsData, setNewsData] = useState({});
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const results = await Promise.all(
					categories.map(category =>
						fetch(`/news/${category.file}`).then(res => res.json())
					)
				);

				const data = categories.reduce((acc, category, index) => {
					acc[category.name] = results[index].articles || [];
					return acc;
				}, {});

				setNewsData(data);
			} catch (error) {
				console.error("Error fetching data: ", error);
				setError("Failed to fetch news articles.");
			}
		};

		fetchData();
	}, []);

	const renderSection = (title, articles) => (
		<section key={title}>
			<h2>{title}</h2>
			<div className="flex flex-row gap-5 w-full h-full overflow-x-auto  hide-scrollbar">
				{articles.map((item, index) => (
					(!item.urlToImage || item.title.includes("[Sponsor]")) ? null : (
						<FilmStripChild
							key={`${title}-${index}`}
							url={item.url}
							src={item.urlToImage}
							alt={item.title}
							width={450}
							height={450}
							heading={item.title}
						/>
					)
				))}
			</div>
			<h3 className="text-right">Scroll here &#62;&#62;</h3>
		</section>
	);

	return (
		<>
			<header className="fixed top-0 text-right w-screen bg-background" style={{ zIndex: 3, paddingRight: "50px" }}>Global Buzz</header>
			<main className="p-5 flex flex-col gap-5 my-8">
				<br />
				{error ? (
					<div style={{color: "red"}} className="text-center font-bold">{error}</div>
				) : (
					Object.entries(newsData).map(([title, articles]) => renderSection(title, articles))
				)}
			</main>

			<footer className="fixed bottom-0 text-center w-screen bg-background z-10">
				Made with ❤️ by <a href="https://github.com/davinash97" target="blank">Avinash</a>
			</footer>
		</>
	);
}

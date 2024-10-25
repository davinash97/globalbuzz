"use client";

import { useEffect, useState } from "react";
import FilmStripChild from "./components/FilmStrip_Child";
import Headlines from "./components/Headlines";

export default function Home() {

	// Headline
	const [headlines, setHeadline] = useState([]);

	// Business
	const [business, setBusiness] = useState([]);

	// Finance
	const [finance, setFinance] = useState([]);

	// Education
	const [education, setEducation] = useState([]);

	// Technology
	const [technology, setTechnology] = useState([]);

	// Innovation
	const [innovation, setInnovation] = useState([]);

	// Travel
	const [travel, setTravel] = useState([]);

	// Culture
	const [culture, setCulture] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [headlineRes, businessRes, financeRes, educationRes, technologyRes, innovationRes, travelRes, cultureRes] = await Promise.all([
					fetch("/news/headline.json"),
					fetch("/news/business.json"),
					fetch("/news/finance.json"),
					fetch("/news/education.json"),
					fetch("/news/technology.json"),
					fetch("/news/innovation.json"),
					fetch("/news/travel.json"),
					fetch("/news/culture.json"),
				]);

				const [headlineData, businessData, financeData, educationData, technologyData, innovationData, travelData, cultureData] = await Promise.all([
					headlineRes.json(),
					businessRes.json(),
					financeRes.json(),
					educationRes.json(),
					technologyRes.json(),
					innovationRes.json(),
					travelRes.json(),
					cultureRes.json(),
				]);

				setHeadline(headlineData.articles || []);
				setBusiness(businessData.articles || []);
				setFinance(financeData.articles || []);
				setEducation(educationData.articles || []);
				setTechnology(technologyData.articles || []);
				setInnovation(innovationData.articles || []);
				setTravel(travelData.articles || []);
				setCulture(cultureData.articles || []);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		}

		fetchData();
	}, [])

	// Headline
	// const [headlines, setHeadline] = useState([]);

	// useEffect(() => {
	//   const fetchData = async () => {
	//     const response = await fetch("/headline.json");
	//     const data = await response.json();
	//     setHeadline(data.articles);
	//   };

	//   fetchData();
	// }, []);

	// Business

	// const [business, setBusiness] = useState([]);

	// useEffect(() => {
	//   const fetchData = async () => {
	//     const response = await fetch("/business.json");
	//     const data = await response.json();
	//     setBusiness(data.articles);
	//   };

	//   fetchData();
	// }, []);

	// Finance
	// const [finance, setFinance] = useState([]);

	// useEffect(() => {
	//   const fetchData = async () => {
	//     const response = await fetch("/finance.json");
	//     const data = await response.json();
	//     setFinance(data.articles);
	//   };

	//   fetchData();
	// }, []);

	return (<>
		<header className="fixed top-0 text-right w-screen bg-background" style={{zIndex: 3, paddingRight: "50px"}}>Global Buzz</header>
		<main className="p-5 flex flex-col gap-5 my-8">
			<br />
			{/* Trending */}
			<section>
				<h2 className="heading">Headlines</h2>
				<div className="filmstrip-container hide-scrollbar">
					{headlines.map((item, index) => (
						(!item.urlToImage) ? null : (
							<FilmStripChild
								key={index}
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

			{/* Business */}
			<section>
				<h2>Business</h2>
				<div className="filmstrip-container hide-scrollbar">
					{business.map((item, index) => (
						(!item.urlToImage) ? null : (
							<FilmStripChild
								key={index}
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

			{/* Finance */}
			<section>
				<h2>Finance</h2>
				<div className="filmstrip-container hide-scrollbar">
					{finance.map((item, index) => (
						(!item.urlToImage || item.title.includes("[Sponsor]")) ? null : (
							<FilmStripChild
								key={index}
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

			{/* Education */}
			<section>
				<h2>Education</h2>
				<div className="filmstrip-container hide-scrollbar">
					{education.map((item, index) => (
						(!item.urlToImage || item.title.includes("[Sponsor]")) ? null : (
							<FilmStripChild
								key={index}
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

			{/* Technology */}
			<section>
				<h2>Technology</h2>
				<div className="filmstrip-container hide-scrollbar">
					{technology.map((item, index) => (
						(!item.urlToImage || item.title.includes("[Sponsor]")) ? null : (
							<FilmStripChild
								key={index}
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

			{/* Innovation */}
			<section>
				<h2>Innovation</h2>
				<div className="filmstrip-container hide-scrollbar">
					{innovation.map((item, index) => (
						(!item.urlToImage || item.title.includes("[Sponsor]")) ? null : (
							<FilmStripChild
								key={index}
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

			{/* Travel */}
			<section>
				<h2>Travel</h2>
				<div className="filmstrip-container hide-scrollbar">
					{travel.map((item, index) => (
						(!item.urlToImage || item.title.includes("[Sponsor]")) ? null : (
							<FilmStripChild
								key={index}
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

			{/* Culture */}
			<section>
				<h2>Culture</h2>
				<div className="filmstrip-container hide-scrollbar">
					{culture.map((item, index) => (
						(!item.urlToImage || item.title.includes("[Sponsor]")) ? null : (
							<FilmStripChild
								key={index}
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
		</main>

		<footer className="fixed bottom-0 text-center w-screen bg-background z-10">Made with ❤️ by <a href="https://github.com/davinash97" target="blank">Avinash</a></footer>

		<style jsx="true">{`
	  .filmstrip-container {
		display: flex;
		flex-direction: row;
		gap: 10px;
		overflow-x: auto;
		// padding: 0 10px;
		align-items: flex-start;
		// justify-content: center;
		width: 100%;
		height: 100%;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
	  }

	  .filmstrip-container > div {
		scroll-snap-align: start;
	  }
	`}</style>
	</>)
}

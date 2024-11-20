const fs = require('fs');
const path = require('path');
const axios = require('axios');

const filePath = path.join(__dirname, '..', 'public/news/headline.json');

const API_KEY = process.env.API_KEY;

async function fetchAndUpdate() {
	const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  
	try {
		const response = await axios.get(url, {
			header: {
				'Authorization': 'Bearer ${process.env.API_KEY}'
			}
		});
		const data = response.data;

		fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
		console.log(`Updated headline.json with the latest headlines.`);
	} catch (error) {
		console.error(`Failed to fetch data:`, error.message);
	}
}

fetchAndUpdate();

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const fileNames = ["business", "culture", "education", "finance", "innovation", "technology", "travel"];

const filesToUpdate = fileNames.map(name => ({
	file: `public/news/${name}.json`,
	keyword: name
}));

const API_KEY = process.env.API_KEY;

async function fetchAndUpdate(file, keyword) {
	const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`;
	
	try {
		const response = await axios.get(url, {
			header: {
				'Authorization': 'Bearer ${process.env.API_KEY}'
			}
		});
		const data = response.data;

		const filePath = path.join(__dirname, '..', file);
		fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
		console.log(`Updated ${file} with data for keyword: ${keyword}`);
	} catch (error) {
		console.error(`Failed to fetch data for ${keyword}:`, error.message);
	}
}

filesToUpdate.forEach(({ file, keyword }) => {
	fetchAndUpdate(file, keyword);
});


const headline = fetch("headline.json")
.then(response => response.json)
.then(data => console.log(data))


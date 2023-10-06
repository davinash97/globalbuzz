const language = document.getElementById("language");
const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("searchButton");
const searchedNews = document.getElementById("newsContainer");
const otherNews = document.getElementById("otherNews");
const headlines = document.getElementById("headlines");

const titleContainer = document.getElementById("title");
const authorContainer = document.getElementById("author");
const sourceContainer = document.getElementById("source");

async function fetchNews(URI) {
    const BaseURL = "http://localhost/backend/?";
    const URL = BaseURL + URI;
    // const URL = "tmp/sample.json";
    const response = await fetch(URL);
    const news = await response.json();
    return news;
}

async function populateOtherUpdates(keyword, language) {
    const otherUpdates = await fetchNews(
        `everything=${keyword}&language=${language}`
    );
    return otherUpdates;
}

async function populateEverything() {
    const EverythingElse = await populateOtherUpdates("in", "en", "popularity");
    console.log("Populating Everything Else");
    try {
        if (EverythingElse["status"] === "ok") {
            const length =
                EverythingElse["totalResult"] < 10
                    ? EverythingElse["totalResult"]
                    : 10;
            for (let index = 0; index < length; index++) {
                const articlesArr = await EverythingElse["articles"][index];
                const titleValue = await articlesArr.title;
                const descriptionValue = await articlesArr.description;
                const authorValue = await articlesArr.author;
                const sourceValue = await articlesArr.source.name;
                const linkURL = await articlesArr.url;
                const imageURL = await articlesArr.urlToImage;
                // It's easier this way
                searchedNews.innerHTML += `
                <a id="newsElement" href="${linkURL}" target="_blank">
                    <img src="${imageURL}" id="thumbnail" alt="thumbnail">
                    <div id="mainNews">
                        <h2 id="title">${titleValue}</h2>
                        <span id="description">${descriptionValue}</span>
                        <div>
                            <h4 id="author">${authorValue}</h4>
                            <h4 id="source">${sourceValue}</h4>
                        </div>
                    </div>
                </a>
                `;
            }
        } else {
            window.alert("Looks like maximum API request limit is reached :)");
        }
    } catch (error) {
        console.error(error);
    }
    HideLoadingAnimation();
}

searchButton.addEventListener("click", async () => {
    if (!searchBox.value || searchBox.value.trim() === "")
        return window.alert("Searchbox can't be empty");
    ShowLoadingAnimation();
    headlines.style.display = "none";
    searchedNews.innerHTML = "";
    const EverythingElse = await populateOtherUpdates(
        searchBox.value.replace(/\s+/g, ""),
        language.value
    );
    try {
        if (EverythingElse["status"] === "ok") {
            const length =
                EverythingElse["totalResult"] < 10
                    ? EverythingElse["totalResult"]
                    : 10;
            searchedNews.innerHTML = `<h3>Searched results for ${searchBox.value}</h3>`;
            for (let index = 0; index < length; index++) {
                const articlesArr = await EverythingElse["articles"][index];
                const titleValue = await articlesArr.title;
                const descriptionValue = await articlesArr.description;
                const authorValue = await articlesArr.author;
                const sourceValue = await articlesArr.source.name;
                const linkURL = await articlesArr.url;
                const imageURL = await articlesArr.urlToImage;
                searchedNews.innerHTML += `
                    <a id="newsElement" href=${linkURL} target="_blank">
                        <img src="${imageURL}" alt="thumbnail" id="thumbnail">
                        <div id="mainNews">
                            <span id="title">${titleValue}</span>
                            <span id="description">${descriptionValue}</span>
                            <span id="author">${authorValue}</span>
                            <span id="source">${sourceValue}</span>
                        </div>
                    </a>
                `;
            }
        }
        HideLoadingAnimation();
    } catch (error) {
        console.error(error);
    } finally {
        console.warn(`Searched for ${searchBox.value}`);
    }
});

populateEverything();

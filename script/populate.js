async function fetchNews(URI) {
    const BaseURL = "http://localhost/backend/?";
    const URL = BaseURL + URI;
    const response = await fetch(URL);
    const news = await response.json();
    return news;
}

const getSearch = async () => {
    try {
        console.warn("Fetching Search Options");
        const response = await fetchNews("getSearchOptions");
        return response.result;
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Fetched Search");
    }
};

const getLanguage = async () => {
    try {
        console.warn("Fetching Language Options");
        const response = await fetchNews("getLanguageOptions");
        return response.result;
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Fetched Language");
    }
};

async function populate() {
    const searchInID = document.getElementById("searchCategory");
    const searchInJSON = await getSearch();
    const languageID = document.getElementById("language");
    const languageJSON = await getLanguage();

    for (let key in searchInJSON) {
        let value = searchInJSON[key];
        searchInID.innerHTML +=
            key === "Title"
                ? `<option value="${value}" selected>${key}</option>`
                : `<option value="${value}">${key}</option>`;
    }
    for (let key in languageJSON) {
        let value = languageJSON[key];
        languageID.innerHTML +=
            key === "English"
                ? `<option value="${value}" selected>${key}</option>`
                : `<option value="${value}">${key}</option>`;
    }
}
populate();

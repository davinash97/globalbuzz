const imgArr = [];
const linkArr = [];
const scrollArr = [];

let index = 0;
let time = 5000; // in milliseconds
const lengthOfHeadlines = 5;

const prev = document.getElementById("prevButton");
const next = document.getElementById("nextButton");
const title = document.getElementById("headlineTitle");
const IMG = document.getElementById("topHeadlinesIMG");
const link = document.getElementById("topHeadlineMain");

prev.addEventListener("click", () => {
    try {
        if (index !== 0) {
            index--;
        }
        if (index === 0) {
            index = lengthOfHeadlines;
        }
        IMG.src = imgArr[index];
        title.innerHTML = scrollArr[index];
        clearInterval(interval);
    } catch (error) {
        console.error(error);
    }
});

next.addEventListener("click", () => {
    try {
        if (index !== lengthOfHeadlines) {
            ++index;
        } else if (index >= lengthOfHeadlines) {
            index = 0;
        }
        IMG.src = imgArr[index];
        title.innerHTML = scrollArr[index];
    } catch (error) {
        console.error(error);
    }
});

const change = () => {
    try {
        IMG.src = imgArr[index];
        title.innerHTML = scrollArr[index];
        index = index < lengthOfHeadlines ? ++index : 0;
    } catch (error) {
        console.error(error);
    }
};


const fetchIt = async () => {
    try {
        // const URL = "tmp/sample.json";
        const URL = "http://localhost/backend/?topHeadlines";
        const response = await fetch(URL);
        const data = await response.json();
        if (data.status !== "ok") console.error("Something went wrong!");
        for (index = 0; index <= lengthOfHeadlines; index++) {
            const newsTitle = data.articles[index].title;
            const newsIMG = data.articles[index].urlToImage;
            const newsLink = data.articles[index].url;
            
            scrollArr[index] = newsTitle;
            imgArr[index] = newsIMG;
            linkArr[index] = newsLink;

            title.innerHTML = scrollArr[0];
            IMG.src = imgArr[0];
            link.href = linkArr[0];
        }
        index = 0;
    } catch (error) {
        console.error(error);
    }
};


document.body.addEventListener("load", fetchIt());
const interval = setInterval(change, time);
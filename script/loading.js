const rootElement = document.getElementById('loaded');
const loadingElement = document.getElementById('loading');

function HideLoadingAnimation() {
    loadingElement.style.display = "none";
    rootElement.style.display = "block";
}

function ShowLoadingAnimation() {
    loadingElement.style.display = "flex";
    rootElement.style.display = "none";
}

ShowLoadingAnimation();
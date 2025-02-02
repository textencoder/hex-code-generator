import testData from "./modules/testData";

export async function loadPage(page) {
    const main = document.getElementById('app');

    try {
        const response = await fetch(`/src/views/${page}.html`);
        const html = await response.text();
        main.innerHTML = html; 
        if (page === 'home') {
            testData(document.querySelector("#cards-container"))
        }
    } catch (error) {
        main.innerHTML = `<p>Page not found</p>`;
    }
}
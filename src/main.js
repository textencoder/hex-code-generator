import { loadPage } from "./router";

function navigateTo(page) {
  history.pushState(null, '', page === 'home' ? '/' : `/${page}`);
  loadPage(page);
}

function handleRouteChange() {
  let page = location.pathname.substring(1) || 'home';
  loadPage(page);
}

window.addEventListener('popstate', handleRouteChange);
window.addEventListener('DOMContentLoaded', handleRouteChange);

document.addEventListener('click', e => {
  if (e.target.matches('header a')) {
    e.preventDefault();
    navigateTo(e.target.getAttribute('href').replace('/', ''))
  }
})

const searchBar = document.querySelector("header input");
const searchIcon = document.getElementById("search-icon");

searchIcon.addEventListener("click", () => {
  searchBar.focus();
});

//blur select when option is clicked
document.querySelectorAll("select").forEach((el) => {
  el.addEventListener("change", () => {
    setTimeout(() => {
      el.blur();
    }, 0);
  });
});




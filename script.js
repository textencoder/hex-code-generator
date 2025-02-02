const body = document.querySelector("body");
const hexContainer = document.getElementById("hex-container");
//const paletteContainer = document.getElementById("palette-container");
const hexMode = document.getElementById("hex-mode");
const paletteMode = document.getElementById("palette-mode");
const copyBtn = document.getElementById("copy");
const copyNotification = document.getElementById("copy-notification");

const colorLabels = document.getElementById("color-labels");

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

const characters = "ABCDEF0123456789";

const randomHexCharacter = () => {
  let randomNumber = Math.floor(Math.random() * 16);
  return characters.charAt(randomNumber);
};

const returnHexCode = () => {
  let hexString = "#";
  for (let i = 0; i < 6; i++) {
    hexString += randomHexCharacter();
  }
  //hexContainer.innerHTML = '';
  //hexContainer.style.backgroundColor = hexString;
  //colorLabels.innerText = hexString;
  return hexString;
};

const returnPalette = () => {
  let paletteArray = [];
  for (let i = 0; i < 5; i++) {
    paletteArray.push(returnHexCode());
  }
  hexContainer.innerHTML = ``;
  colorLabels.innerText = "";
  paletteArray.forEach((hex) => {
    hexContainer.innerHTML += `<div class="palette" style="background: ${hex}">${hex}</div>`;
  });
};

//window.addEventListener("load", returnHexCode, false);

const cardsContainer = document.getElementById("cards-container");

for (let i = 0; i < 24; i++) {
  let bgColor = returnHexCode();
  cardsContainer.innerHTML += `<div class="card">
  <div class="color" style="background-color: ${bgColor}"></div>
  <div class="color-info">
  <div class="name-hex">
  <p>Color Name</p>
  <p class="hex-label">${bgColor}</p>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m305-704 112-145q12-16 28.5-23.5T480-880q18 0 34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647l170-57Zm49 69-194 64 124 179-4 191 200-55 200 56-4-192 124-177-194-66-126-165-126 165Zm126 135Z"/></svg>
  </div>
  </div>`;
}

//hexMode.addEventListener("click", returnHexCode);
//paletteMode.addEventListener("click", returnPalette);

//copy to clipboard
/*
copyBtn.addEventListener("click", () => {
  if (hexContainer.style.display == "none") {
    navigator.clipboard.writeText(paletteContainer.innerText);
  } else {
    navigator.clipboard.writeText(hexContainer.innerText);
  }

  copyNotification.style.display = 'flex';

  copyNotification.classList.add('visible');

  // delay the fade-out to allow the element to appear first
  setTimeout(() => {
    copyNotification.classList.add('fade-out');

    // remove visibility after the transition ends
    copyNotification.addEventListener('transitionend', () => {
      copyNotification.classList.remove('visible', 'fade-out');
      copyNotification.style.display = 'none'; // Hide the element completely
    }, { once: true });
  }, 1000);
});
*/

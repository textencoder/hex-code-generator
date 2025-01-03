const body = document.querySelector("body");
const hexContainer = document.getElementById("hex-container");
const paletteContainer = document.getElementById("palette-container");

const hexMode = document.getElementById("hex-mode");
const paletteMode = document.getElementById("palette-mode");
const copyBtn = document.getElementById("copy");

const copyNotification = document.getElementById("copy-notification");

hexMode.addEventListener("click", () => {
  paletteContainer.style.display = "none";
  hexContainer.style.display = "flex";
  returnHexCode();
});

paletteMode.addEventListener("click", () => {
  hexContainer.style.display = "none";
  paletteContainer.style.display = "flex";
  returnPalette();
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
  hexContainer.style.backgroundColor = hexString;
  hexContainer.innerText = hexString;
  return hexString;
};

const returnPalette = () => {
  let paletteArray = [];
  for (let i = 0; i < 5; i++) {
    paletteArray.push(returnHexCode());
  }
  paletteContainer.innerHTML = ``;
  paletteArray.forEach((hex) => {
    paletteContainer.innerHTML += `<div class="palette" style="background: ${hex}">${hex}</div>`;
  });
};

//window.addEventListener("load", returnHexCode, false);
hexContainer.addEventListener("click", returnHexCode);
window.addEventListener("load", returnPalette, false);
paletteContainer.addEventListener("click", returnPalette);

//copy to clipboard
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

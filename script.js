const body = document.querySelector('body');
const hexContainer = document.getElementById('hex-container');
const paletteContainer = document.getElementById('palette-container');

const hexMode = document.getElementById('hex-mode');
const paletteMode = document.getElementById('palette-mode');

const copyBtn = document.getElementById('copy');

paletteMode.addEventListener("click", () => {
    hexContainer.style.display = "none"
    paletteContainer.style.display = "flex";
    hexMode.style.background = "none";
    hexMode.style.color = "#969696";
    paletteMode.style.background = "#0f0f0f";
    paletteMode.style.color = "white";
})

hexMode.addEventListener("click", () => {
    paletteContainer.style.display = "none"
    hexContainer.style.display = "flex";
    hexMode.style.background = "#0f0f0f";
    hexMode.style.color = "white";
    paletteMode.style.background = "none";
    paletteMode.style.color = "#969696";
})

const characters = 'ABCDEF0123456789';

const randomHexCharacter = () => {
    let randomNumber = Math.floor(Math.random() * 16);
    return characters.charAt(randomNumber)
}

const returnHexCode = () => {
    let hexString = '#';
    for (let i = 0; i < 6; i++) {
    hexString += randomHexCharacter();
    }
    hexContainer.style.backgroundColor = hexString;
    hexContainer.innerText = hexString;
    return hexString;
}   

const returnPalette = () => {
    let paletteArray = [];
    for (let i = 0; i < 5; i++) {
        paletteArray.push(returnHexCode());
    }
    paletteContainer.innerHTML = ``;
    paletteArray.forEach(hex => {
        paletteContainer.innerHTML += `<div class="palette" style="background: ${hex}">${hex}</div>`;
    })
}

//window.addEventListener("load", returnHexCode, false);
hexContainer.addEventListener("click", returnHexCode);
window.addEventListener("load", returnPalette, false);
paletteContainer.addEventListener('click', returnPalette);

//copy to clipboard
copyBtn.addEventListener('click', () => {
    if (hexContainer.style.display == 'none') {
        navigator.clipboard.writeText(paletteContainer.innerText);
    } else {
        navigator.clipboard.writeText(hexContainer.innerText);
    }
})
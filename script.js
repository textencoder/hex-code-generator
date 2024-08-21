const bodyColor = document.querySelector('body');
const hexContainer = document.getElementById('hex-container');
const paletteContainer = document.getElementById('palette-container');

const hexMode = document.getElementById('hex-mode');
const paletteMode = document.getElementById('palette-mode');

paletteMode.addEventListener("click", () => {
    hexContainer.style.display = "none"
    paletteContainer.style.display = "flex";
    hexMode.style.textDecoration = "none";
    paletteMode.style.textDecoration = "underline";
})

hexMode.addEventListener("click", () => {
    paletteContainer.style.display = "none"
    hexContainer.style.display = "flex";
    hexMode.style.textDecoration = "underline";
    paletteMode.style.textDecoration = "none";
})

hexMode.style.textDecoration = "underline";

const characters = 'ABCDEF0123456789';

const randomHexCharacter = () => {
    let randomNumber = Math.floor(Math.random() * 16);
    return characters.charAt(randomNumber)
}

const returnHexCode = () => {
    const hexArray = ['#'];
    for (let i = 0; i < 6; i++) {
    hexArray.push(randomHexCharacter());
    }
    const finalHex = hexArray.join('');
    hexContainer.style.backgroundColor = finalHex;
    hexContainer.innerText = finalHex;
    return finalHex;
}   

const returnPalette = () => {
    const paletteArray = [];
    for (let i = 0; i < 5; i++) {
        paletteArray.push(returnHexCode());
    }
    console.log(paletteArray);
    //return paletteArray;
    paletteContainer.innerHTML = ``;
    paletteArray.forEach(hex => {
        //console.log(hex);
        paletteContainer.innerHTML += `<div class="palette" style="background: ${hex}">${hex}</div>`
    })
}

//window.addEventListener("load", returnHexCode, false);
//window.addEventListener("click", returnHexCode);
window.addEventListener("load", returnPalette, false);
window.addEventListener('click', returnPalette)

// add copy to clipboard feature
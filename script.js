const bodyColor = document.querySelector('body');

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
    //bodyColor.style.backgroundColor = finalHex;
    //bodyColor.innerText = finalHex;
    return finalHex;
}   

const returnPalette = () => {
    const paletteArray = [];
    for (let i = 0; i < 5; i++) {
        paletteArray.push(returnHexCode());
    }
    //console.log(paletteArray);
    //return paletteArray;
    bodyColor.innerHTML = ``;
    paletteArray.forEach(hex => {
        //console.log(hex);
        bodyColor.innerHTML += `<div class="palette" style="background: ${hex}">${hex}</div>`
    })
}

//window.addEventListener("load", returnHexCode, false);
//window.addEventListener("click", returnHexCode);
window.addEventListener("load", returnPalette, false);
window.addEventListener('click', returnPalette)

// add copy to clipboard feature
// color mode / pallette mode
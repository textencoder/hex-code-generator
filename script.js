const bodyColor = document.querySelector('body');

const characters = 'ABCDEF0123456789';

const hexArray = ['#'];

const randomHexCode = () => {
    let randomNumber = Math.floor(Math.random() * 16);
    return characters.charAt(randomNumber)
}

for (let i = 0; i < 6; i++) {
    hexArray.push(randomHexCode())
}

const finalHex = hexArray.join('');

bodyColor.style.backgroundColor = finalHex;

bodyColor.innerText = finalHex;

window.addEventListener('click', () => window.location.reload())

// add copy to clipboard feature
// random palette generator
// color mode / pallette mode
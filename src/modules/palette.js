import returnHexCode from "./hex";

const returnPalette = () => {
    let paletteArray = [];
    for (let i = 0; i < 5; i++) {
      paletteArray.push(returnHexCode());
    }
    return paletteArray;
  };

export default returnPalette;
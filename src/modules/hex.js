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
    return hexString;
  };

export default returnHexCode;
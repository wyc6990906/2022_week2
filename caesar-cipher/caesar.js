// caesar.js

const encrypt = function (plaintext, key) {
  // IMPLEMENT ME
  let result = ''
  for (let i = 0; i < plaintext.length; i++) {
    const code = plaintext[i].charCodeAt();
    // charCode of space === 32
    if (code === 32) {
      result += ' ';
    }

    if (code >= 97 && code <= 122 && key > 0 && code !== 32) {
      if (code + key > 122) {
        result += String.fromCharCode(code - 26 + key);
      } else {
        result += String.fromCharCode(code + key);
      }
    } else if (code + key < 97 && code !== 32) {
      result += String.fromCharCode(code + 26 + key)
    } else if (code !== 32) {
      result += String.fromCharCode(code + key)
    }
  }
  return result;

};

module.exports = {encrypt};

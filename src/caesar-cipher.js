function isAlpha(char) {
  return /[a-zA-Z]/.test(char);
}

function isLower(char) {
  return char.toLowerCase() === char;
}

function isUpper(char) {
  return char.toUpperCase() === char;
}

function shiftChar(char, shift) {
  if (!isAlpha(char)) {
    return char;
  }

  const shiftCode = char.charCodeAt(0) + shift;

  if ((isLower(char) && shiftCode > 122) || (isUpper(char) && shiftCode > 90)) {
    return String.fromCharCode(shiftCode - 26);
  }

  return String.fromCharCode(shiftCode);
}

export default function caesarCipher(str, shift) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += shiftChar(str.charAt(i), shift);
  }
  return result;
}

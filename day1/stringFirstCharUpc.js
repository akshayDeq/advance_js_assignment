function firstCharToUppCase(str) {
  let asciiCode = str.charCodeAt(0);

  if (asciiCode >= 97 && asciiCode <= 122) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
  }
  console.log(str);
}

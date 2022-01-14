// function will capitalise the words in array
function makeAllCaps(wordsArray) {
  return new Promise((resolve, reject) => {
    // If the passed argument is not an array reject the promise
    if (!Array.isArray(wordsArray)) {
      reject("Argument must be an array");
    }

    // check if all elements of the array are of type string
    wordsArray.forEach((element) => {
      if (typeof element !== "string") {
        throw new Error("Array items should be of type string");
      }
    });

    // capitalize the words in the array
    wordsArray = wordsArray.map((word) => {
      return word.toUpperCase();
    });

    // resolve the promise with array of capitalized words
    resolve(wordsArray);
  });
}

// function will sort the array items in ascending order
function sortWords(wordsArray) {
  return new Promise((resolve) => {
    // sort the array in ascending order
    wordsArray.sort((a, b) => {
      if (b > a) return -1;
    });

    // resolve the promise with array of sorted words
    resolve(wordsArray);
  });
}


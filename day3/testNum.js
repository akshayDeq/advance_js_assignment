// function to test if number is greater/less than 10
function testNum(x) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number") {
      reject("Argument is not a number"); // reject the promise if the argument is not of type number
    } else if (x > 10) {
      resolve("Value is greater than 10");
    } else if (x < 10) {
      resolve("Value is less than 10");
    } else {
      resolve("Value is equal to 10");
    }
  });
}

testNum("a")
  .then((testNumResult) => {
    console.log(testNumResult);
  })
  .catch((error) => {
    throw new Error(error);
  });

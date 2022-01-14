/* function to generate a random integer between 0-5
and resolve the promise after some random amount of time */
function waitForRandomTime(numberToPrint) {
  // Generate a random number to delay the resolve for a few seconds
  let randomNumber = Math.ceil(Math.random() * 10) % 6; //random number between 0-5
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(numberToPrint);
    }, randomNumber * 1000);
  });
}


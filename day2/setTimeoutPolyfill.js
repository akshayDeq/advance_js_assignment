function myTimeout(cb, delay) {
  let time = Date.now();

  /* throw an error if call back is not a function
  or delay is not a number */
  if (typeof cb !== "function" || typeof delay !== "number") {
    throw new TypeError("Incompatible argument types");
  }
  while (Date.now() <= time + delay) {}
  cb();
}

// call the function with 2seconds delay
myTimeout(() => {
  console.log("mytimeout");
}, 2000);

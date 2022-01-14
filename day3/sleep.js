// function that will resolve the callback after x seconds of time
function sleep(cb, x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cb);
    }, x);
  });
}

// call the sleep function with 0 seconds of delay
sleep(() => {
  console.log("me");
}, 0).then((callBack) => callBack());

// to test non blocking behaviour of promise we are logging some lines
console.log("run");
console.log("run");
console.log("run");
console.log("run");
console.log("run");
console.log("run");
console.log("run");

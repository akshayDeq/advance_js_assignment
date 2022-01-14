// function that will resolve the callback after x seconds of time
function sleep(cb, x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cb);
    }, x);
  });
}


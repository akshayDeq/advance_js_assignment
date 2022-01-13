// Polyfills for:-

let arr = [1, 2, 3, 4, 5];
// length of an array
Array.prototype.myLength = function () {
  let length = 0;

  for (let items of this) {
    length++;
  }

  return length;
};
// test the polyfill for length of array
console.log(arr.myLength()); // 5


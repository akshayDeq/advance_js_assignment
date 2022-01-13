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

/* indexOf any element in the array
will return -1 if does not exist or array is empty */
Array.prototype.myIndexOf = function (item) {
  const length = this.myLength();

  if (length == 0) {
    return -1;
  }

  for (let i = 0; i < length; i++) {
    if (this[i] === item) {
      return i;
    }
  }

  return -1;
};
console.log(arr.myIndexOf(1)); //0
console.log(arr.myIndexOf(45)); //-1

// Custom push for pushing an element in array
Array.prototype.myPush = function (...item) {
  for (let i of item) {
    this[this.length] = i;
  }
};
arr.myPush(45);
console.log(arr); //[ 1 , 2 , 3 , 4 , 45 ]


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

/* Custom Foreach loop
here cb is the callback function */
Array.prototype.myForeach = function (cb) {
  for (let i = 0; i < this.myLength(); i++) {
    cb(this[i], i, this);
  }
};

arr.myForeach((value, index, array) => console.log(value, index, array));
/*
1 0 [ 1, 2, 3, 4, 5, 45 ]
2 1 [ 1, 2, 3, 4, 5, 45 ]
3 2 [ 1, 2, 3, 4, 5, 45 ]
4 3 [ 1, 2, 3, 4, 5, 45 ]
5 4 [ 1, 2, 3, 4, 5, 45 ]
45 5 [ 1, 2, 3, 4, 5, 45 ] 
*/

/* Custom pop , remove last element from array
and return the popped value */
Array.prototype.myPop = function () {
  const length = this.myLength();

  if (length === 0) {
    return;
  }

  const poppedItem = this[length - 1];

  //   decrease the array length by 1
  this.length = this.length - 1;
  //   return the popped item
  return poppedItem;
};

console.log(arr.myPop()); //45
console.log(arr); //[ 1, 2, 3, 4, 5 ]


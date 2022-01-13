const _ = require("lodash");
const obj = {
  name: {
    first: "akshay",
    last: "kanojia",
  },
  getName: function () {
    return this.name.first + " " + this.name.last;
  },
};

const deepClone = _.cloneDeep(obj);
deepClone.name.first = "shubham";
console.log(obj);
console.log(deepClone);

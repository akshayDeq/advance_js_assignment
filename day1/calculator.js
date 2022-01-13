function calculator() {
  this.a = 0;
  this.b = 0;
  return {
    read: function read() {
      const a = prompt("Enter the first value", 10);
      const b = prompt("Enter the second value", 10);
      if (!isNaN(a) && !isNaN(b)) {
        this.a = parseInt(a);
        this.b = parseInt(b);
      }
    },
    sum: function sum() {
      const result = this.a + this.b;
      if (isNaN(result)) {
        console.log(0);
        return;
      }
      console.log(result);
    },
    mul: function mul() {
      const result = this.a * this.b;
      if (isNaN(result)) {
        console.log(0);
        return;
      }
      console.log(result);
    },
  };
}
let cal = new calculator();
cal.read();
cal.sum();
cal.mul();

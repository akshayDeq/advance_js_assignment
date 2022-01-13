function factorial(x) {
  let result = 1;
  return function calculate() {
    for (let i = x; i > 0; i--) {
      result *= i;
    }
    console.log(result);
  };
}

let fact5 = new factorial(5);
let fact7 = new factorial(7);
fact5();
fact7();

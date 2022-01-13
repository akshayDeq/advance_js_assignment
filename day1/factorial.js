function factorial(x) {
  let result = 1;
  return function calculate() {
    for (let i = x; i > 0; i--) {
      result *= i;
    }
    console.log(result);
  };
}

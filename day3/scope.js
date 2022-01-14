// The problem here is because of the variable scopes

// this print 10
/*
var keyword has a function scope ,
setTimeout is asynchronous function , therefore 
the execution will not stop because of the 10 second timeout period

for loop continues to execute and stops when i becomes 10,
after 10 seconds the value of i being printed is always 10 because
its referencing the same variable declared with var i whose value has became 10
*/
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}

// this prints from 0-10
/*
changing the keyword from var to let solves this problem
as let keyword has a block scope , everytime the loop reruns
a new instance of variable i is passed , with incremented value

thus, this loop prints a sequence from 0 to 10
*/
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}


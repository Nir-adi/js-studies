//functions declaration when declaring you can hoist the function only for named and declared functions

function sayMyName(name) {
  console.log("My name is " + name);
}
sayMyName("Nir");

//return
function ShoutMyName(name) {
  return "My name is " + name;
}
let meesage = ShoutMyName("Nir");
console.log(meesage);

//function expression

let dream = function () {
  console.log("My name is Harel");
};
dream();

// arrow function you can use => as function

let addTwoNumbers = (a, b) => a + b;
console.log(addTwoNumbers(10, 11));

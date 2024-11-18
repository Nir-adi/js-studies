//loops bulit like
//for (start;stop;step)
// basic loop that count to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//basic loop to decrease by 1
for (let e = 10; e >= 0; e--) {
  console.log(e);
}
//while loop
let counter = 0;
while (counter <= 5) {
  console.log(counter);
  counter++;
}
//do while
//let number = 1
//do{
//  console.log(number)
//number++
//} while (number<=5)

//array loops

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for of loop

for (let element of numbers) {
  console.log(element);
}

// objectloops
let person = {
  Firstname: "Nir",
  Lastname: "Adi",
  Age: 30,
  Sex: "Male",
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}

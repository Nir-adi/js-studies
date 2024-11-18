for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("error:even number is unprintable");
  } else {
    console.log(i);
  }
}
let num1 = 20;

while (num1 > 1) {
  console.log(num1);
  num1--;
}
let num = 20;

do {
  console.log(num);
  num--;
} while (num > 1);

let arr = [10, 20, 30, 40, 50, 60];

for (let element of arr) {
  console.log(element);
}

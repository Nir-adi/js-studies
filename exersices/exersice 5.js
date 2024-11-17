//Multipication
let multiplay = (a, b) => a * b;
console.log(multiplay(10, 5));
//Addtion
let addtion = (z, x) => z + x;
console.log(addtion(10, 8));
//Name
let helloMyFriend = (name) => "Hello dear " + name;
console.log(helloMyFriend("Guy"));
//Temp convertor
let temp = (t) => (t * 9) / 5 + 32;
console.log(temp(50));
//discount
let person1 = {
  firstName: "Shmil",
  lastName: "Dror",
  age: 50,
  membership: true,
};
let person = {
  firstname: "Izik",
  lastname: "Amiron",
  age: 15,
  membership: false,
};
let discount = (person1.age > 18, person1.membership == true)
  ? "dear " + person1.firstName + " own a discount"
  : "dear" + person1.firstName + "dont have discount";
console.log(discount);

let discount2 = (person.age > 18, person.membership == true)
  ? "dear " + person.firstname + " own a discount"
  : "dear " + person.firstname + " dont have discount";
console.log(discount2);

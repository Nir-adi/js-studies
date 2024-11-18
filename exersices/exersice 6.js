//check number
let number = -5;
if (number > 0) {
  console.log("Positive");
} else if (number == 0) {
  console.log("Zero");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("None of the above");
}

//Adult or minor

const person = {
  firstName: "Ami",
  lastName: "Samis",
  age: 18,
};
if (person.age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//Students
const students = [
  {
    firstName: "Avi",
    lastName: "Srom",
    age: 15,
    score: 73,
  },
  {
    firstName: "Asi",
    lastName: "Sror",
    age: 15,
    score: 82,
  },
  {
    firstName: "Adi",
    lastName: "Sos",
    age: 15,
    score: 95,
  },
  {
    firstName: "Will",
    lastName: "Smom",
    age: 15,
    score: 67,
  },
  {
    firstName: "Viso",
    lastName: "Mor",
    age: 15,
    score: 75,
  },
];

function grading(score) {
  let Grade;
  switch (true) {
    case score >= 90 && score <= 100:
      Grade = "A";
      break;
    case score >= 80 && score <= 89:
      Grade = "B";
      break;
    case score >= 70 && score <= 79:
      Grade = "C";
      break;
    case score >= 60 && score <= 69:
      Grade = "D";
      break;
    case score >= 0 && score <= 59:
      Grade = "F";
      break;
    default:
      Grade = "invalid";
  }
  return Grade;
}
function assign(students) {
  students.forEach((student) => {
    const Grade = grading(student.score);
    console.log(`${student.firstName} has a grade of: ${Grade}`);
  });
}
assign(students);
//leap year
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

// Example usage:
const year = 1999;
if (isLeapYear(year)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

// Reduce
// Sum of all even numbers

let initial = [4, 6, 1, 3, 8];

let sumOfEvenNumbers = initial.reduce((acc, i) => {
  // If Current iteration is even
  if (i % 2 == 0) {
    acc = acc + i;
  }
  return acc;
}, 0);
console.log(sumOfEvenNumbers);

// [4, 2, 8, 10, 30]

let evenNumbersArray = initial.reduce((acc, cur) => {
  if (cur % 2 == 0) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(evenNumbersArray);

// 1st iteration
// acc -> [], cur -> 4
// acc -> [4]

// 2nd iteration
// acc -> [4], cur -> 6
// acc -> [4, 6]

// 3 iteration
// acc -> [4, 6], cur -> 1
// acc -> [4, 6]

// 4 iteration
// acc -> [4, 6], cur -> 3
// acc -> [4, 6]

// 5 iteration
// acc -> [4, 6], cur -> 8
// acc -> [4, 6, 8]

let persons = [
  {
    firstName: "Akshay",
    lastName: "Khurana",
    age: 27,
  },
  {
    firstName: "Deepika",
    lastName: "Padukone",
    age: 36,
  },
  {
    firstName: "Akshay",
    lastName: "Kumar",
    age: 50,
  },
  {
    firstName: "Sallu",
    lastName: "Bhai",
    age: 54,
  },
];

// Full Name of those persons who have age greater then 35

let filteredPersons = persons.filter((person) => {
  return person.age > 45;
});

console.log(filteredPersons);

let nameOfThePersons = filteredPersons.map((person) => {
  return `${person.firstName} ${person.lastName}`;
});

console.log(nameOfThePersons);

let filteredActors = persons
  .filter((person) => {
    return person.age > 45;
  })
  .map((person) => {
    return `${person.firstName} ${person.lastName}`;
  });

console.log(filteredActors);

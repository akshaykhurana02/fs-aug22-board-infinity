let actors = [
  {
    firstName: "Salman",
    lastName: "Khan",
    gender: "Male",
    age: 54,
  },
  {
    firstName: "Ranbir",
    lastName: "Kapoor",
    gender: "Male",
    age: 40,
  },
  {
    firstName: "Sharukh",
    lastName: "Khan",
    gender: "Male",
    age: 54,
  },
  {
    firstName: "Katrina",
    lastName: "Kaif",
    gender: "Female",
    age: 40,
  },
  {
    firstName: "Kareena",
    lastName: "Kapoor",
    gender: "Female",
    age: 48,
  },
];

/*

    1. Print Full Name of those actors who are Male
    2. Print Name along with gender of those actors whose age is greater then 45
    3. Print the sum of age of all female actors

*/

// 1. Print Full Name of those actors who are Male

let result1 = actors
  .filter((actor) => {
    return actor.gender === "Male";
  })
  .map((actor) => {
    return `${actor.firstName} ${actor.lastName}`;
  });

console.log(result1);

// 2. Print Name along with gender of those actors whose age is greater then 45

let result2 = actors
  .filter((actor) => {
    return actor.age > 45;
  })
  .map((actor) => {
    return `${actor.firstName} ${actor.lastName}, Age: ${actor.age}`;
  });

console.log(result2);

// 3. Print the sum of age of all female actors

// Only Reduce

let result3 = actors.reduce((acc, i) => {
  if (i.gender === "Female") {
    acc += i.age;
  }
  return acc;
}, 0);

console.log(result3);

// Only Filter & Reduce

let result4 = actors
  .filter((actor) => {
    return actor.gender === "Female";
  })
  .reduce((acc, i) => {
    return (acc += i.age);
  }, 0);

  console.log(result4);

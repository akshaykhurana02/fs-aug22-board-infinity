function first() {
  console.log("This is First Function");
}

first();

var second = function () {
  console.log("This is Second Function");
};

second();

// Arrow Function or Fat Arrow Function

var third = () => {
  console.log("This is Third Function");
};

third();

// Regular Functions
// this points to Window Object

// Arrow Function
// this points to undefined

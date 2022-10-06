var clothes = ["Shirt", "Jeans", "T-shirt", "Tie"];
var clothesObj = Object.assign({}, clothes);

/*
    ["Shirt", "Jeans", "T-shirt", "Tie"]

    to

    {
        0: Shirt,
        1: Jeans,
        2: T-shirt
        3: Tie
    }
*/

console.log(clothesObj);

clothesObj["firstName"] = "Akshay";
clothesObj.lastName = "Khurana";

Object.freeze(clothesObj);

// console.log(freezedClothesObj);
console.log(clothesObj);

// clothes.shift();
// console.log(clothes);

/*

    Assignment ->

    Using Nested If Else If

    Tshirt -> 5 different colours (Red, Green, Black, Purple, White)
    Jeans -> 3 different colours (Blue, Grey, Black)


    Logic ->

    Red -> Blue
    Green -> Blue, Black
    Black -> Blue, Grey
    Purple -> Blue, Black
    White -> Blue, Black


    Sample 1 (True) ->

    Tshirt Colour -> Black
    Jeans Colour -> Grey

    Output -> You can wear Black Tshirt with Grey Jeans.


    Sample 2 (False) ->

    Tshirt Colour -> Red
    Jeans Colour -> Black

    Output -> This is not a valid combination


*/

let t_shirt = "Purple";
let jeans = "Black";

if (t_shirt == "Red") {
  if (jeans == "Blue") {
    console.log(`You can wear ${t_shirt} T-Shirt with ${jeans} jeans.`);
  } else {
    console.log(`This is not a valid combination!`);
  }
} else if (t_shirt == "Green") {
  if (jeans == "Blue" || jeans == "Black") {
    console.log(`You can wear ${t_shirt} T-Shirt with ${jeans} jeans.`);
  } else {
    console.log(`This is not a valid combination!`);
  }
} else if (t_shirt == "Black") {
  if (jeans == "Blue" || jeans == "Grey") {
    console.log(`You can wear ${t_shirt} T-Shirt with ${jeans} jeans.`);
  } else {
    console.log(`This is not a valid combination!`);
  }
} else if (t_shirt == "Purple") {
  if (jeans == "Blue" || jeans == "Black") {
    console.log(`You can wear ${t_shirt} T-Shirt with ${jeans} jeans.`);
  } else {
    console.log(`This is not a valid combination!`);
  }
} else if (t_shirt == "White") {
  if (jeans == "Blue" || jeans == "Black") {
    console.log(`You can wear ${t_shirt} T-Shirt with ${jeans} jeans.`);
  } else {
    console.log(`This is not a valid combination!`);
  }
} else {
  console.log(`This is not a valid combination!`);
}

// Bitwise Operators

/*

&	AND	Sets each bit to 1 if both bits are 1
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to 1 if only one of two bits is 1
~	NOT	Inverts all the bits
<<	Zero fill left shift	
    Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	
    Shifts right by pushing copies of the leftmost bit in from the left,
    and let the rightmost bits fall off
>>>	Zero fill right shift	Shifts right by pushing zeros in from the left,
    and let the rightmost bits fall off

*/

// Binary Numbers

/* 

    Decimal Numbers -> 0 to 9
    Binary Numbers -> 0 and 1 are there

    Decimal Number to Binary Number

    (256)  (128) (64)  (32)  (16)  (8)  (4)  (2)  (1)
    2^8    2^7   2^6   2^5   2^4   2^3  2^2  2^1  2^0

    1 -> 0001
    2 -> 0010
    3 -> 0011
    4 -> 0100
    5 -> 0101
    6 -> 0110
    7 -> 0111
    8 -> 1000
    9 -> 1001
    10 -> 1010
    11 -> 1011
    12 -> 1100
    13 -> 1101
    14 -> 1110
    15 -> 1111
    16 -> 10000
*/

/*
    1st step -> 0101 & 0001
*/

// AND -> If both are 1 then only resultant will be 1
// OR -> If any of the one is 1, resultant will be 1


// BITWISE AND

console.log("5 & 2 -> ", 5 & 2);

/*
    0101 & 0010

    0101
    0010

    0000

*/

console.log("7 & 2 -> ", 7 & 2);

/*
    0111 & 0010

    0111
    0010

    0010

*/


// BITWISE OR (If any of the one is 1, resultant will be 1)

console.log("5 | 2 -> ", 5 | 2);

/*
    0101 & 0010

    0101
    0010

    0111

*/

console.log("7 | 2 -> ", 7 | 2);

/*
    0111 & 0010

    0111
    0010

    0111

*/

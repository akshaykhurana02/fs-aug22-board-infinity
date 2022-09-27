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

// BITWISE XOR (If any of the one is 1, resultant will be 1, If both will be 0 or 1, resultant will be 0)

/*

0 ^(XOR) 0 -> 0
0 ^ 1 -> 1
1 ^ 0 -> 1
1 ^ 1 -> 0

*/

console.log("9 ^ 4 -> ", 9 ^ 4);

/*
    1001 & 0100

    1001
    0100

    1101 -> 13

*/

console.log("7 ^ 3 -> ", 7 ^ 3);

/*
    0111 & 0011

    0111
    0011

    0100 -> 4

*/

// NOT ~ (It inverts the bits -> 0 to 1, 1 to 0)

console.log("~5 -> ", ~5);

/*

    00000000000000000000000000000101 -> 5
    11111111111111111111111111111010 -> -6

*/

// << Left Shift (Shifts bits to the left and attach 0 instead from the right)

console.log("5 << 1 -> ", 5 << 1);

/*

00101 -> 5
01010 -> 10

*/

console.log("5 << 2 -> ", 5 << 2);

/*

00101 -> 5
10100 -> 20

*/

console.log("5 << 3 -> ", 5 << 3);

/*

00101 -> 5
101000 -> 40

*/

console.log("5 << 4 -> ", 5 << 4);

/*

00101 -> 5
001010000 -> 2 && 6 + 2 && 4 -> 64 + 16 -> 80

*/
console.log("5 << 5 -> ", 5 << 5);


// >> Sign Preserving Shift

console.log("5 >> 1 -> ", 5 >> 1);

/*

0101 -> 5
0010 -> 2

*/

console.log("5 >> 2 -> ", 5 >> 2);

/*

0101 -> 5
0001 -> 1

*/

console.log("5 >> 3 -> ", 5 >> 3);

/*

0101 -> 5
0000 -> 0

*/

console.log("-5 >> 1 -> ", -5 >> 1);

/*

11111111111111111111111111111011 -> -5
11111111111111111111111111111101 -> -3

*/

// >>> (Zero Fill Right Shift) -> Will always return a positive number

console.log("-5 >>> 1 -> ", -5 >>> 1);

/*

11111111111111111111111111111011 -> -5
01111111111111111111111111111101 -> -3

*/



/*

Micheal created his own programming language.
In his language, variable names should follow the below rules:

* The first character must be a letter or an underscore().

* The last character cannot be a vowel. It can be in any case - lower or
upper.

* The rest of the name can include any letter, number, or underscore. You
can't use any other characters, including symbols, spaces, or punctuation
marks.

* It should include at least one uppercase letter.

You are given a list of variable names. You have to tell whether they are valid
or invalid according to Micheal's programming language naming
convention. The input terminates if -1 is encountered.
If the given variable name is valid, print "Valid"
Else print "Invalid"

*/

function Logic(input) {
  // 1st Case - The first character must be a letter or an underscore()
  if (!/[a-zA-Z]|_/.test(input.charAt(0))) {
    return "Invalid";
  }

  // 2nd Case - The last character cannot be a vowel (Lower or Upper)
  if (/a|e|i|o|u/i.test(input.charAt(input.length - 1))) {
    return "Invalid";
  }

  // 3rd Case - The rest of the name can include any letter, number, or underscore.
  // You can't use any other characters, including symbols, spaces,
  // or punctuation marks.

  let trimmedInput = input.slice(1, input.length - 1);
  for (let i = 0; i < trimmedInput.length; i++) {
    if (!/[a-zA-Z]|[0-9]|_/.test(trimmedInput.charAt(i))) {
      return "Invalid";
    }
  }

  // 4th Case - It should include at least one uppercase letter.
  let upperCaseCharaceterCount = 0;
  for (let i = 0; i < input.length; i++) {
    if (/[A-Z]|_/.test(input.charAt(i))) {
      upperCaseCharaceterCount++;
      break;
    }
  }

  if (upperCaseCharaceterCount === 0) {
    return "Invalid";
  }

  return "Valid";
}

console.log(Logic("HelloWorld!"));

//* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

let str1 = "Success";

str1 = str1.toLowerCase();
let result = [];

str1.split("").forEach(function (char) {
  console.log(str1.split(char));
  if (str1.split(char).length > 2) {
    result.push(")");
  } else {
    result.push("(");
  }
});
console.log(result.join(""));

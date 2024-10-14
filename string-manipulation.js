/**
 * 0: String manipulation is when you take a string and create a new version of said string (because strings are immutable) that has been modified in some way.
 * 
 * 1. With operators: You can use the + and += operators to concatenate two or more strings together. adding a number to a string auto-converts the number into a string
 * and adds it onto the other string. using comparision operators on strings can give you true or false depending on if one string is higher, lower, or equal to another in lexicographical (similar to alphabetical) order.
 * 
 * 2. With string methods: There are many string methods that can be used to create new strings. .slice() returns a specified portion of a string as a new string. You can use bracket notation or the .charAt()
 * method to get a character from a specified index in the string. .split() turns a string into an array of strings separated by a certain character (or regular expression) specified in the method call
 * (the specified character will be removed from all strings in the array). .toLowerCase returns a version of its given string that has had all of its letters made lowercase. There are also many more methods.
 */

// 1.1 manipulations with operators //
// 
var someVariable = "I am a very";
var someVariable2 = "I'm";

someVariable2 = someVariable2 + " smol";
console.log(someVariable2); // prints => "I'm smol"

someVariable += " big boi string";
console.log(someVariable); // prints => "I am a very big boi string"

console.log(someVariable > someVariable2); // prints => false

// 2.1 manipulations with string methods //
// 
var someVariable = "Hello Everybody, my name is Markiplier";
var someVariable2 = "Unga Bunga";

console.log(someVariable2.slice(0, 4)); // prints => "Unga"
console.log(someVariable.charAt(28)); // prints => "M"
console.log(someVariable2[5]); // prints => "B"
console.log(someVariable.split(",")); // prints => ["Hello Everybody", " my name is Markiplier"]
console.log(someVariable2.toLowerCase()); // prints => "unga bunga"
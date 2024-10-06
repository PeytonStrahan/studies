/**
 * 0: Data types are the many different types of data (or values) that can be stored in variables and utilized by some part of the program to help
 * complete a task (which, depending on the data type, can possibly involve making new data, seeing whether or not a piece of code should run,
 * containing a certain section of code to be run, or most other actions that a program can take). The different types of data include the number,
 * string, boolean, array, object, function, undefined, null, NaN, infinity, and negative infinity (-infinity). The many different types of data have
 * several unique properties that make them useful in certain situations. Numbers let you do mathematical operations, Strings let you store and
 * display something like a name or message, arrays let you store a list of items, etc.
 * 
 * 1. Number: A number is a simple data type that represents a numeric value. JavaScript numbers are floating point numbers that can have a decimal
 * point or even be negative. Numbers can be written in hexadecimal, binary, or decimal exponential notation in JavaScript in addition to being
 * written as a normal number. Numbers can be used with arithmetic operators to perform mathematical operations. Numbers have a few different methods
 * including .toString() (which converts a number into a string) and .toExponential() (which converts a number into exponential notation).
 * There is also a native Math object with many methods designed to be used with numbers.
 * 
 * 
 * 2. String: A string is a simple data type that represents text data. JavaScript strings consist of symbols (letters, numbers, punctuation marks, etc.)
 * surrounded by either backticks or either type of quotation marks. Strings can be concatenated with addition operators. Strings can have individual characters
 * accessed through bracket notation similarly to how accessing elements in an array works. Strings have tons of methods and properties including
 * .length (which gives you a number equal to the amount of characters contained in the string), .charAt() (an alternative to using bracket notation
 * to access characters in an array), and .slice() (which makes a copy of a string and returns a specified section of it).
 * 
 * 3. Boolean: A boolean is a simple data type that is either a value of "true" or a value of "false". JavaScript booleans are mostly used in conjunction
 * with some sort of conditional statement to determine whether or not a piece of code should run (true causes the code to run while false causes the
 * code to not run). If a value that isn't a boolean and that isn't an expression that resolves to a boolean is put into a conditional statement, the
 * conditional treats the value as a truthy value (not necessarily a true boolean) that allows the conditional's code to run unless the value is false,
 * any form of the number 0, null, NaN, undefined, or an empty string ("") that causes the value to be treated as a falsey value. Speaking of which,
 * operators that cause a value or values to resolve to a boolean include relational operators (operators that check if one value is greater or lesser
 * than another), equality operators (operators that check if one value is equal or not equal to another), and the bang operator (which reverses a truthy
 * value or boolean into a false boolean and vice versa). There are also some methods that return a boolean like Array.isArray() (which checks if a value is
 * an array and returns true if it is, but returns false otherwise) and .includes() (which returns a boolean representing whether or not a given value was found
 * in a given string or array).
 * 
 * 4. Array: An array is a complex data type that represents a list of elements. JavaScript arrays are usually used to store a list of multiple values (elements)
 * of the same data type, but they can hold many values of different data types and of any data type.
 * 
 * 5. Object: An object is a complex data type that represents a collection of key/value pairs.
 * 
 * 6. Function: A function is a block of code designed to complete a specific task whenever and where-ever it is called.
 * 
 * 7. undefined: 
 * 
 * 8. null: 
 * 
 * 9. NaN: 
 * 
 * 10. Infinity and -Infinity: 
 * 
 * 11. The difference between primitive/simple and complex data types:
 * 
 * 12. Primitive values are passed to a function by COPY, complex values are by REFERENCE: 
 */

// 1 number //
// Declaring and then logging a variable results in getting undefined because the variable was neither initialized nor assigned a value.
var someVariable = 5;
console.log(typeof someVariable); // prints => "number"

// 1.1 declaration //
// 
var someVariable;
console.log(someVariable); // prints => undefined
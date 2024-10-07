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
 * of the same data type, but they can hold many values of different data types and of any data type. JavaScript Arrays consist of two brackets containing any
 * number of data types separated by commas. Arrays are zero-indexed, meaning that the array's first element is represented by an index of 0, the second element
 * represented by a 1, and so on. These indexes can be used with bracket notation to access an element at the index in the array. Some array methods and properties
 * include .length (which gives you the number of elements in a given array), .push() (which alters an array by placing a given value at the end of the array), and
 * .shift() (which destructively removes and returns the element at the front of an array, altering the array). Arrays are also considered objects by the "type of"
 * operator, so Array.isArray() (which returns true if the given value is an array) is sometimes used when you need to have a program to be able to tell the difference.
 * 
 * 5. Object: An object is a complex data type that represents a collection of key/value pairs. JavaScript objects are usually used to store the named properties and methods
 * of some "thing" in your code. JavaScript objects consist of two curly braces containing any number of key/value pairs separated by commas, with the key (a string
 * representing a property's name) and value (an object property of any data type) being separated by a colon. Object properties can be accessed by using dot notation
 * with a literal key name or by using bracket notation with a value that resolves to a string of the key name. Some methods of the native Object include
 * Object.create() (which creates a copy of a given object that can be altered separately from the original), Object.values() (which returns an array of all of the values
 * contained within the given object), and Object.keys() (which returns an array of all of the key names contained within the given object).
 * 
 * 6. Function: A function is a complex data type that encloses a block of code designed to complete a specific task whenever and where-ever it is called. Javascript functions can either be assigned to a
 * variable as a function expression or declared as a hoisted function declaration. Javascript Functions consists of its parameters between two parentheses (can be empty), 
 * the function keyword before the parameters (or "=>" after the parameters), the function's name between the function keyword and the parameters (not needed the function
 * is a function expression), the code to be run between two curly braces at the end of the function, and the return keyword (which returns whatever value is given to it
 * to the function call that activated the function) within the function's code block. The function's parameters are placeholders for whatever values that a call to that
 * function gives to be used in the code block of said function. After being made, functions can be called where ever they are needed by using a function call that resolves
 * to whatever is returned by the function. Function calls use the arguments given to them to replace the parameter placeholders in the function for that specific call of
 * said function. callFunctions don't really have any properties or methods to use (at least according to several Google searches).
 * 
 * 7. undefined: Undefined is a simple data type that represents a lack of a value in a variable. The data type of undefined occurs naturally when nothing is assigned to a
 * variable or collection property (causing the variable to resolve to undefined) or when a function's return keyword returns nothing and causes its function call to resolve
 * to undefined. Undefined is a falsey value. Undefined appears to have no methods or properties.
 * 
 * 8. null: Null is a simple data type that represents an intentional lack of a value in a variable or a placeholder for an object that isn't available for some reason. Null
 * may be passed into a function that is expecting a value or object, but the function is also ready to handle it when it is told to run without its expected value or object.
 * Null doesn't seem to have any methods or properties of use. Null is seen as an "object" by the typeof operator.
 * 
 * 9. NaN: NaN is a simple data type that represents a number of an indeterminate form (which usually results from using arithmatic operators with infinity), a "not real" number,
 * the result of using arithmatic operators between a number and data that isn't a number, or the result of giving the wrong kind of data to any method expecting a valid number.
 * To make a long story short, NaN is given when a value that is supposed to be a valid number just isn't for some reason. NaN causes math operations to usually return NaN and
 * comparison/equality operators to always return false. There is one method called Number.isNaN(), which returns true if a given value is NaN, but returns false otherwise.
 * NaN is seen as a "number" by the typeof operator.
 * 
 * 10. Infinity and -Infinity: Infinity and Infinity are simple data types that represent a value of infinity (or a number above JavaScript's max number limit of 1.797693134862315E+308)
 * and a value of negative infinity (or a number below JavaScript's minimum number limit of -1.797693134862315E+308) respectively. These two data types appear to have no methods or
 * properties of use, and they simply seem to be numbers that represent immeasurable size or a number that exceeded the limit of what JavaScript can handle. Both Infinity and
 * -Infinity are seen as "number" by the typeof operator.
 * 
 * 11. The difference between primitive/simple and complex data types:
 * 
 * 12. Primitive values are passed to a function by COPY, complex values are by REFERENCE: 
 */

// 1.1 number //
// Declaring and then logging a variable results in getting undefined because the variable was neither initialized nor assigned a value.
var someVariable = 5;
console.log(typeof someVariable); // prints => "number"

// 1.1 declaration //
// 
var someVariable;
console.log(someVariable); // prints => undefined
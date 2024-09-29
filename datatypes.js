/**
 * 0: Data types are the many different types of data (or values) that can be stored in variables and utilized by some part of the program to help
 * complete a task (which, depending on the data type, can possibly involve making new data, seeing whether or not a piece of code should run,
 * containing a certain section of code to be run, or most other actions that a program can take). The different types of data include the number,
 * string, boolean, array, object, function, undefined, null, NaN, infinity, and negative infinity (-infinity). The many different types of data have
 * several unique properties that make them useful in certain situations. Numbers let you do mathematical operations, Strings let you store and
 * display something like a name or message, arrays let you store a list of items, etc.
 * 
 * 1. Number: 
 * 
 * 2. String: 
 * 
 * 3. Boolean: 
 * 
 * 4. Array: 
 * 
 * 5. Object: 
 * 
 * 6. Function: 
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
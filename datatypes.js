/**
 * 0: Data types
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
 * 9 NaN: 
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
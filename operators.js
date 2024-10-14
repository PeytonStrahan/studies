/**
 * 0: Operators are symbols used with values to complete simple computations or actions, which can be combined with more operators to create more complex actions and/or computations.
 * 
 * 1. Assignment operators: The assignment operator (=) assigns a value to a variable. Variations include -= (which subtracts whatever value is after the operator from the variable before assigning the result to that same variable)
 * and += (which adds whatever value is after the operator to the variable before assigning the result to that same variable).
 * 
 * 2. Arithmetic operators: Arithmetic operators are a collection of symbols used to perform mathematical operations with numbers.
 * 
 * 3. Comparison operators: Comparison operators cause values to resolve to either true or false depending on if the comparison being tested is true or not.
 * > returns true if the first value is greater than the second, but returns false otherwise (with < doing the opposite). Adding = to make <= or >= also makes
 * the operation return true if both values being compaired are equal. == returns true only if both compared values are loosely equal while === returns true
 * only if both values are strictly equal.
 * 
 * 4. Logical operators: Logical operators can be used with comparison operators to test for more complicated scenareos. && returns true of both of its given values
 * (which can be comparison operations that resolve to either true or false) return a truthy value or true. || can return true if one or both of its given values resolve to
 * a truthy value or true. ! just flips a falsey value or false boolean to be a truthy value or true boolean (and vice versa for truthy values and true booleans).
 * 
 * 5. Unary operators (!, typeOf, -): Unary operators take in and perform actions or computations with one value. (Binary operations take in and use two values with each other
 * to perform an action or resolve to a new value).
 * 
 * 6. Ternary operator (a ? b : c): Ternary operators take in three values to perform an action or computation. The only ternary operator in JavaScript is the ? operator (a ? b : c),
 * which returns "b" if "a" resolve to either a truthy value or a true boolean, but returns "c" otherwise. This operator acts similarily to a conditional statement.
 */

// 1.1 assignment operators //
// 
var someVariable = 20;
console.log(someVariable); // prints => 20

someVariable -= 6;
console.log(someVariable); // prints => 14

someVariable += 18
console.log(someVariable); // prints => 32

// 2.1 arithmetic operators //
// 
var someVariable = 20;
console.log(someVariable + 10); // prints => 30
console.log(someVariable - 10); // prints => 10
console.log(someVariable / 10); // prints => 2
console.log(someVariable * 10); // prints => 200
console.log(someVariable ** 4); // prints => 160000
console.log(someVariable % 10); // prints => 0

// 3.1 comparison operators //
// 
var someVariable = 20;
var someVariable2 = "hello";

console.log(someVariable > 100); // prints => false
console.log(someVariable < 100); // prints => true
console.log(someVariable <= 30); // prints => true
console.log(someVariable >= 20); // prints => true
console.log(someVariable == 4); // prints => false
console.log(someVariable2 === "hello"); // prints => true

// 4.1 logical operators //
// 
var someVariable = 20;
var someVariable2 = "hello";

console.log(someVariable > 100 && someVariable2 === "hello"); // prints => false
console.log(someVariable < 100 || someVariable === 14276267481); // prints => true
console.log(!(someVariable <= 30)); // prints => false

// 5.1 unary operators //
// 
var someVariable = "20";

console.log(typeof someVariable); // prints => "string"
console.log(+someVariable); // prints => 20
console.log(-someVariable); // prints => -20

someVariable = +someVariable;
console.log(someVariable++); // prints => 20
console.log(someVariable); // prints => 21
console.log(++someVariable); // prints => 22
console.log(someVariable--); // prints => 22
console.log(someVariable); // prints => 21
console.log(--someVariable); // prints => 20

// 6.1 ternary operators //
// 
var someVariable = 20;

console.log(someVariable > 100 ? "it's bigger than 100" : "it's smaller than 100"); // prints => "it's smaller than 100"
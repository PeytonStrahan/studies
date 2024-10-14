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
 * said function. callFunctions don't really have any properties or methods to use (at least according to several Google searches). The function data type is also the
 * only complex data type that is "copy by value" instead of "copy by reference".
 * 
 * 7. undefined: Undefined is a simple data type that represents a lack of a value in a variable. The data type of undefined occurs naturally when nothing is assigned to a
 * variable or collection property (causing the variable to resolve to undefined) or when a function's return keyword returns nothing and causes its function call to resolve
 * to undefined. Undefined is a falsey value. Undefined appears to have no methods or properties.
 * 
 * 8. null: Null is a simple data type that represents an intentional lack of a value in a variable or a placeholder for an object that isn't available for some reason. Null
 * may be passed into a function that is expecting a value or object, but the function is also ready to handle it when it is told to run without its expected value or object.
 * Null doesn't seem to have any methods or properties of use. Null is seen as an "object" by the typeof operator.
 * 
 * 9. NaN: NaN is a simple data type that represents a number of an indeterminate form (which usually results from trying to perform very specific math operations with Infinity), a "not real" number,
 * the result of using certain arithmatic operators between a number and data that isn't a number, or the result of giving the wrong kind of data to any method expecting a valid number.
 * To make a long story short, NaN is given when a value that is supposed to be a valid number just isn't for some reason. NaN causes math operations to usually return NaN and
 * comparison/equality operators to always return false. There is one method called Number.isNaN(), which returns true if a given value is NaN, but returns false otherwise.
 * NaN is seen as a "number" by the typeof operator.
 * 
 * 10. Infinity and -Infinity: Infinity and Infinity are simple data types that represent a value of infinity (or a number above JavaScript's max number limit of 1.797693134862315E+308)
 * and a value of negative infinity (or a number below JavaScript's minimum number limit of -1.797693134862315E+308) respectively. These two data types appear to have no methods or
 * properties of use, and they simply seem to be numbers that represent immeasurable size or a number that exceeded the limit of what JavaScript can handle. Both Infinity and
 * -Infinity are seen as "number" by the typeof operator. Number.isFinite() returns false when given Infinity, -Infinity, or NaN; allowing it to check whether or not a number
 * is Infinity or -Infinity when combined with using Number.isNaN() to make sure that the value isn't NaN.
 * 
 * 11. The difference between primitive/simple and complex data types: Simple data types are immutable values (meaning that they cannot be changed) that are created in the call stack and are
 * assigned (or, according to one reference, have their address in said call stack assigned) to whatever variable that they are assigned to (in a way, simple data types can
 * be thought of as their data being stored within the variable itself even though it may not technically be the case). Simple data types cannot be modified, but can be assigned to a variable or be used to create new and separate values/data types in the call stack to
 * be assigned to a variable. A simple data type can only hold a single simple value of a fixed size, meaning that it cannot grow or shrink in its size. Complex data types are mutable
 * values (meaning that they can be modified and create changes in a variable's value without reassigning anything to said variable) that are created in the memory heap and have the address to said value
 * in the memory heap assigned to whatever variable the complex data type is assigned to in order to point to where the complex data type's data is in the memory heap. Complex data types can hold
 * multiple values of any data type. Complex data types can grow and shrink in size. Data contained within a complex data type can be permanently changed (mutated), changing the properties of the value
 * that a variable points to without changing what's in the variable itself.
 * 
 * 12. Primitive values are passed to a function by COPY, complex values are by REFERENCE: Trying to assign a variable to another variable (or more accurately, the value assigned to said
 * other variable) will have two different effects depending on the other variable's assign data type. If the data type is simple, a new and separate copy of the other variable's value is
 * created and assigned to the first variable, giving it a new value that can be replaced with a different value without changing the value that the other variable is holding. This is
 * called "copy by value". If the data type is complex, then both variables are given the same reference address to the same complex data type, meaning that mutating the value contained
 * in either variable results in both variables being changed. This is called "copy by reference". Be aware that while functions are considered to be complex data types, they are
 * "copy by value".
 */

// 1.1 typeof number //
// Using the typeof operator with a number returns a string of "number", meaning that the typeof operator sees the value and understands that it is of the number data type.
var someVariable = 5;
console.log(typeof someVariable); // prints => "number"

// 1.2 numbers can do math //
// Using arithmetic operators with numbers allows you to perform mathematics.
console.log(someVariable + 12); // prints => 17

// 1.3 .toString() //
// Using .toString with a number turns it into a string.
console.log(someVariable.toString()); // prints => "5"

// 2.1 typeof string //
// Using the typeof operator with a string returns a string of "string", meaning that the typeof operator sees the value and understands that it is of the string data type.
var someVariable = "word";
console.log(typeof someVariable); // prints => "string"

// 2.2 .slice() //
// Using the .slice() with a string returns a new string derived from a desired portion of the original string.
console.log(someVariable.slice(1, 3)); // prints => "or"

// 3.1 typeof boolean //
// Using the typeof operator with a boolean returns a string of "boolean", meaning that the typeof operator sees the value and understands that it is of the boolean data type.
var someVariable = true;
console.log(typeof someVariable); // prints => "boolean"

// 3.2 how expressions that resolve to a boolean allows a conditional statement to work //
// You can use expressions that resolve to a boolean (or truthy values) in a conditional statement to determine whether or not a piece of code should run.
// The function in this example uses conditional statements that allow only truthy numbers or strings greater than 5 in length to be logged to the console.
function determineIfShouldRun(input) {
    if (typeof input === "string" && input.length > 5) {
        console.log("string: " + input);
    } else if (typeof input === "number" && input) {
        console.log("number: " + input);
    }
};
determineIfShouldRun("gearbox"); // prints => "string: gearbox"
determineIfShouldRun(27); // prints => "number: 27"
determineIfShouldRun(0); // prints nothing

// 4.1 typeof array //
// Using the typeof operator with an array returns a string of "object", meaning that the typeof operator sees the value as an object and Array.isArray() must be used to determine whether or not something is an array.
var someVariable = [1337, "amogus", "Maurice", true, "idk", "^^__<><>BAstart"];
console.log(typeof someVariable); // prints => "object"
console.log(Array.isArray(someVariable)); // prints => true

// 4.2 .push() //
// Using the .push() with an array mutates said array by adding a desired value to the end of said array.
someVariable.push("Oh hewwo!");
console.log(someVariable); // prints => [1337, "amogus", "Maurice", true, "idk", "^^__<><>BAstart", "Oh hewwo!"]

// 5.1 typeof object //
// Using the typeof operator with an object returns a string of "object", meaning that the typeof operator sees the value and understands that it is of the object data type.
// Array.isArray() returns false when given an object.
var someVariable = {
    jo: "mama",
    big: "chungus",
    brain: "rot"
};
console.log(typeof someVariable); // prints => "object"
console.log(Array.isArray(someVariable)); // prints => false

// 5.2 adding a property to an object //
// A key value pair can be added to an object by using either bracket notation or dot notation.
let newKeyName = "me";
someVariable[newKeyName] = "Gungaga";
someVariable.some = "thing";
console.log(someVariable); // prints => [object Object] {
                                    //     big: "chungus",
                                    //     brain: "rot",
                                    //     jo: "mama",
                                    //     me: "Gungaga",
                                    //     some: "thing"
                                    //   }

// 5.3 Object.values() //
// Using Object.values() with an object returns an array of all of the values contained within the object.
console.log(Object.values(someVariable)); // prints => ["mama", "chungus", "rot", "Gungaga", "thing"]

// 6.1 typeof function //
// Using the typeof operator with a function returns a string of "function", meaning that the typeof operator sees the value and understands that it is of the function data type.
var someVariable = function(a, b){
    return a + b;
};
console.log(typeof someVariable); // prints => "function"

// 6.2 a function can run its code with its inputted variable whenever it is called//
// Calling a function with parameters allows it to return a unique result determined by the parameters given to the function.
// In this case, calling this addition-based function with 8 and 27 returns 35, a number resulting from adding 8 and 27 together.
let resultOfAddition = someVariable(8, 27);
console.log(resultOfAddition); // prints => 35

// 7.1 typeof undefined //
// Using the typeof operator with undefined returns a string of "undefined", meaning that the typeof operator sees the value and understands that it is of the undefined data type.
var someVariable = undefined;
console.log(typeof someVariable); // prints => "undefined"

// 7.2 natural undefined occurance //
// undefined is automatically assigned to any variable declared without being assigned anything.
var someVariable2;
console.log(someVariable2); // prints => undefined

// 8.1 typeof null //
// Using the typeof operator with null returns a string of "object", meaning that the typeof operator sees the value as an object and an equality operation must be used to determine whether or not something is of the null data type.
var someVariable = null;
console.log(typeof someVariable); // prints => "object"
console.log(someVariable === null); // prints => true

// 8.2 use of null //
// null is used for the intentional lack of any object value.
var someVariable = {
    name: "Juan",
    location: null
};
function locator(object) {
    if (object.location === undefined) {
        console.log("Location does not exist");
    } else if (object.location === null) {
        console.log("Location is hidden. Updating...");
        object.location = "hidden";
    } else {
        console.log(object.name + " is at " + object.location);
    }
}
locator({}); // prints => "Location does not exist"
locator(someVariable); // prints => "Location is hidden. Updating..."
locator(someVariable); // prints => "Juan is at hidden"

// 9.1 typeof NaN //
// Using the typeof operator with NaN returns a string of "number", meaning that the typeof operator sees the value as a number and Number.isNaN() must be used to determine whether or not something is of the NaN data type.
var someVariable = NaN;
console.log(typeof someVariable); // prints => "number"
console.log(Number.isNaN(someVariable)); // prints => "number"

// 9.2 example of NaN occurance //
// dividing a number by a string, dividing Infinity by Infinity, and trying to get the square root of a negative number are all examples that result in NaN.
console.log(69 / "uhoh"); // prints => NaN
console.log(Infinity / Infinity); // prints => NaN
console.log(Math.sqrt(-9)); // prints => NaN

// 10.1 typeof Infinity and -Infinity //
// Using the typeof operator with either Infinity or -Infinity returns a string of "number", meaning that the typeof operator sees the value as a number and Number.isNaN() combined with Number.isFinite must be used to determine whether or not something is of the Infinity or -Infinity data type.
// You can use a comparison operator to see if a value is Infinity (greater than 0) or -Infinity (less than 0).
var someVariable = [Infinity, -Infinity];
console.log(typeof someVariable[0], typeof someVariable[1]); // prints => "number" and then "number"
if (!Number.isNaN(someVariable[0]) && !Number.isNaN(someVariable[1])) {
    if (!Number.isFinite(someVariable[0]) && !Number.isFinite(someVariable[1])) {
        someVariable.forEach(function(value) {
            if (value >= 0) {
                console.log("Infinity"); // prints => "Infinity"
            } else if (value < 0) {
                console.log("-Infinity"); // prints => "-Infinity"
            }
        });
    };
};

// 10.2 getting Infinity and -Infinity //
// Infinty can be gotten by creating a number above 1.797693134862315E+308 or below -1.797693134862315E+308.
console.log(1.797693134862315E+308); // prints => 1.797693134862315E+308
console.log(1.797693134862315E+308 * 2); // prints => Infinity
console.log(-1.797693134862315E+308 * 2); // prints => -Infinity

// 11.1 simple data types can only be created and assigned //
// Simple data types can only be created, assigned to a variable, or utilized to do things like creating new values to assign to variables.
var someVariable = "someString";
var someVariable2 = someVariable + " but different";
console.log(someVariable); // prints => "someString"
console.log(someVariable2); // prints => "someString but different"

// 11.2 complex data types can be mutated, change in size, etc. //
// Complex data types can be created, be assigned to more than one variable at a time, be used to create new values to assign to variables if needed, be mutated to change variables without reassigning anything to them, grow or shrink in size, and hold more than one value of any type within them.
var someVariable = ["bunga", 23, true];
var someVariable2 = someVariable;
console.log(someVariable2); // prints => ["bunga", 23, true]
someVariable2 = 18 + someVariable[1];
console.log(someVariable2); // prints => 41
someVariable[2] = false;
console.log(someVariable); // prints => ["bunga", 23, false]
someVariable.push([1, 2]);
console.log(someVariable); // prints => ["bunga", 23, false, [1, 2]]

// 12.1 simple data types are copy by value //
// Copying a simple data type from a variable creates a new individual copy of the data assigned to a new variable that can be used and reassigned without changing what the original variable was assigned to.
var someVariable = 1;
var someVariable2 = someVariable;
console.log(someVariable); // prints => 1
console.log(someVariable2); // prints => 1
someVariable2 = 3;
console.log(someVariable); // prints => 1
console.log(someVariable2); // prints => 3
someVariable2 = someVariable + someVariable2;
console.log(someVariable2); // prints => 4

// 12.2 complex data types are copy by reference //
// Copying a complex data type from a variable only creates another pointer to the same data that is now assigned to two different variables, with mutations to the data stored in either variable affecting the same complex data type.
var someVariable = [1, 2, 3];
var someVariable2 = someVariable;
console.log(someVariable); // prints => [1, 2, 3]
console.log(someVariable2); // prints => [1, 2, 3]
someVariable2.push("uh oh");
console.log(someVariable); // prints => [1, 2, 3, "uh oh"]
console.log(someVariable2); // prints => [1, 2, 3, "uh oh"]
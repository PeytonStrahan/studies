/**
 * 0: Variables are named containers for storing data.
 * The purpose of a variable is to be a reference that holds on to (or points to) a piece of data so
 * that it may be used or altered later on in the program. Variables can hold on to one of
 * many different types of values ranging from simple data types (like numbers, strings, and booleans)
 * to references that point to complex data types (like arrays and objects). Variables can even point
 * to function definitions if needed. The value that a variable points to can also be switched out with a
 * different value of a different type through reassignment.
 * 
 * 1. Declaration and Assignment: In order to create a variable we must first `declare` it. Depending on the declarative keyword you use, you may initialize
 * the variable with a value or not. You can declare a variable by typing a variable keyword (var, let, or const) in front of what you want to name the variable.
 * This creates a new variable that is initialized/assigned to undefined by default. We can assign a value by using the assignment operator (=). On either the line that the
 * variable was initialized on or on a line after it; we can type the variable's name (if it wasn't already typed out when trying to initalize and assign a variable on the same line),
 * type the assignment operator (=), and then type out whatever value you want to assign the variable to. This process can be repeated to reassign different values to the same
 * variable, replacing the old value each time it is done.
 * 
 * 2. Var, let, const: There are three declarative keywords that can be used to declare variables--var, let, const.
 * Var is the original declarative keyword. Var variables can be either globally-scoped (meaning that it can be accessed from basically anywhere within
 * the program file due to being declared inside of the global scope but outside of any function scope) or function-scoped (meaning that it can only be
 * accessed and utilized within the function that it was defined in as-well-as any other function contained within the same function). Variables
 * declared with var can be declared with var again within the same scope, which can cause an unintentional overwrite of the original var variable's
 * data. Let variables are up next. In addition to being able to be either globally-scoped or function-scoped, let variables can also be block-scoped
 * (meaning that they can only be accessed from within the code block that they were dclared in, or any function or inner code block contained within the same code block).
 * Unlike var variables, let variables cannot be declared more than once within the same scope and will create an error if someone tries to do it anyways.
 * Const variables are like let variables in that they both cannot be declared more than once in the same scope; and they both can be globally-scoped, function-scoped,
 * or block-scoped. Const variables differ in that they must be initialized with a variable at the same time that they are declared, and they cannot be reassigned a
 * new value after initialization. Keep in mind that since assigning a complex data type to a variable makes it store a reference to the data instead of the data itself,
 * mutating an array or object assigned to a const variable is possible because it actually doesn't reassign anything to the variable.
 * Differences in hoisting for var, let, and const will be discussed in the upcoming "Hoisting" explanation.
 * 
 * 3: Hoisting: Hoisting is when function and variable declarations are moved to the top of their scope during the program's compilation phase
 * (before the program actually begins). This allows the the program to use functions (in their scope) before they are defined. Variables work a little differently.
 * Variable declarations (but not their initializations nor their assignments) are hoisted to the top of their scope, causing the variable to "initialize" and point to
 * the value of undefined from the beggining of the program until the part in the program that assigns a value to them is ran. While this works normally for var variables
 * (meaning that accessing a var variable before it is declared or assigned a value results in getting undefined), trying to access a let or const variable before they
 * are declared results in a special error that prevents you from doing so. Fun fact: function expressions (function definitions stored in a variable) follow the hoisting
 * rules for whatever variable keyword was used to create the variable that they are stored in instead of the hoisting rules for function declarations, meaning that they
 * can't be used before they are declared.
 */

// 1.1 declaration //
// Declaring and then logging a variable results in getting undefined because the variable was neither initialized nor assigned a value.
var someVariable;
console.log(someVariable); // prints => undefined

// 1.2 initialization and assignment //
// initVariable will be given a value on the same line that it was declared on (initialization). someOtherVar will be given a value on the line after its declaration (assignment).
// Both variables will log the value that was assigned to them.
var initVariable = "initialized";
console.log(initVariable); // prints => "initialized"
var someOtherVar;
someOtherVar = "assigned";
console.log(someOtherVar); // prints => "assigned"

// 1.3 re-assignment //
// someOtherVar from 1.2 will be given given a new value, replacing the old value.
someOtherVar = "re-assigned";
console.log(someOtherVar); // prints => "re-assigned"



// 2.1 variables can be used anywhere within its scope//
// Declaring any type of variable makes it usable/accessable within any function or code block (including nested ones) located within the scope that the variables were defined within.
// In this case, the variables are usable anywhere because they were defined in the global scope.
var stooge1 = "Moe";
let stooge2 = "Curly";
const stooge3 = "Larry";

function logger(x, y, z) {
    console.log(x + " " + y + " " + z); // prints => "Moe Curly Larry"
    if (true) {
        console.log("still: " + x + " " + y + " " + z); // prints => "still: Moe Curly Larry"
    }
};

logger(stooge1, stooge2, stooge3);

// 2.2 variables are function scoped //
// Declaring a var variable (or any other type of variable) in a function makes it usable within the function, but not outside of the function.
function logger2() {
    var animal1 = "dog";
    let animal2 = "cat";
    const animal3 = "fly";
    console.log(animal1 + " " + animal2 + " " + animal3); // prints => "dog cat fly"
};

logger2();
console.log(animal1 + " " + animal2 + " " + animal3); // prints => "ReferenceError: animal1 is not defined" (animal2 and animal3 would have caused the same error, but both are skipped because the program stops after encountering the first error)

// 2.3 let and const variables are block scoped //
// Declaring a let or const variable in a code block makes it usable within the code block, but not outside of the code block.
// This rule does not apply to var variables.
if(true) {
    let fruit1 = "apple";
    const fruit2 = "banana";
    var fruit3 = "pear";
    console.log(fruit1 + " " + fruit2 + " " + fruit3); // prints => "apple banana pear"
};

console.log(fruit3); // prints => "pear"
console.log(fruit1 + " " + fruit2 + " " + fruit3); // prints => "ReferenceError: fruit1 is not defined"

// 2.4 var variable re-declaration //
// Re-declaring a var variable replaces the old variable.
var name = "Bob";
var name = "Shrek";
console.log(name); // prints => "Shrek"

// 2.5 let and const variable re-declaration //
// Re-declaring a let or const variable creates an error.
let coins = 72;
let coins = 100; // prints => "SyntaxError: Identifier 'coins' has already been declared"
console.log(coins); // (doesn't actually run due to error)

const myFriends = 0;
const myFriends = 1; // (would print "SyntaxError: Identifier 'myFriends' has already been declared", but the previous error stopped the program from running)
console.log(myFriends); // (doesn't actually run due to error)

// 2.6 const variable can't be reassigned //
// Trying to reassign data to a const variable creates an error.
const unFunnyNumber = 68;
unFunnyNumber = 419; // prints => "TypeError: Assignment to constant variable."
console.log(unFunnyNumber); // (doesn't actually run due to error)

// 2.6 const variable must be initialized //
// Trying to declare a const variable without initializing it a value creates an error.
const strangeGreeting; // prints => "SyntaxError: Missing initializer in const declaration"
strangeGreeting = "Hewwo";
console.log(strangeGreeting); // (doesn't actually run due to error)

// 2.7 const variables holding complex data types can be mutated //
// Permanent changes can occur to whatever complex data type a const variable is pointing to.
const wierdArray = ["bungus", 1337, {jo: "mama"}];
wierdArray[0] = "bingus";
wierdArray[2].face = "-_-";
console.log(wierdArray); /* prints => ["bingus", 1337, [object Object] {
                                        face: "-_-",
                                        jo: "mama"
                                      }]
*/



// 3.1 hoisted var variables point to undefined //
// Trying to access a var variable before they are initialized or assigned a value results in undefined.
console.log(question1); // prints => undefined
var question1 = "Who are you?";

// 3.2 hoisted const and let variables can create errors //
// Trying to access a const or let variable before they are initialized or assigned a value results in a specialized error.
console.log(question2); // prints => "ReferenceError: Cannot access 'question2' before initialization"
console.log(question3); // (would print "ReferenceError: Cannot access 'question3' before initialization", but the previous error stopped the program)
let question2 = "How are you?";
const question3 = "Are you ok?";

// 3.3 hoisted functions declarations work differently to hoisted variables pointing to functions //
// Function declarations can be accessed and used before they are declared. Function expressions use the same rules as whatever type of variable is used to store/reference the function, meaning that they cannot be used before they are assigned to a variable.
console.log(lookAt("you")); // prints => "*looks at you"
console.log(giveHug); // prints => undefined
console.log(giveHug("you")); // prints => "TypeError: giveHug is not a function"

function lookAt(person) {
    return "*looks at " + person;
};
var giveHug = function(person) {
    return "*hugs " + person;
};
/**
 * 0: Functions are blocks of code (or sets of statements) that can be declared or assigned to a variable before being used as many times as needed wherever they are needed.
 * 
 * 1. The two phases to using functions: First one must define a function by placing down the function keyword, typing the function's name, describing what parameters it
 * expects to recieve (optional), and creating a block of code that performs some actions (possibly by using said parameters if the function has any). Functions can also be
 * created and assigned to variables in function expressions (an alternative to the previously described function declarations). Afterwards, a function can be called/executed
 * by typing its name followed by paranthesis (any arguments you wish to send to the function to replace its parameters can be put in between these paranthesis). To state it plainly,
 * a function call causes the code in a function's body to run.
 * 
 * 2. The difference between a function's parameters and arguments PASSED to a function: A function's parameters serve as placeholders in the function body that are
 * to be replaced with whatever arguments are given to a function by a function call, meaning that different arguments in different function calls can result in
 * different outcomes. Arguments contain values while parameters are usually undefined (unless given a default value) until they are overwritten by arguments given
 * by a function call.
 * 
 * 3. The syntax for a NAMED function: In a function declaration, a named function is "function functionName(parameter1, parameter2, etc...) {code to run}".
 * 
 * 4. How to assign a function to a variable: You can assign a function to a variable by removing the function's name and assigning the function to a variable
 * like so: "var variableName = function (parameter1, parameter2, etc...) {code to run}". You can also assign an arrow function to a variable like so:
 * "var variableName = (parameter1, parameter2, etc...) => {code to run}".
 * 
 * 5. How to specify inputs and outputs: Functions return undefined by default and are capable of havingno parameters to replace with arguments. To specify inputs,
 * the function must have parameters to be overwritten and then used within the function body and the function call must include arguments that will be the values
 * to replace the function's parameters with (more specifically, the parameters are assigned to whatever the passed in arguments resolve to). You can specify what
 * a function outputs by putting a return keyword within the function's body followed by whatever value you wish to return to any function calls that execute the
 * function. The value returned by the keyword can, of course, be made so that it changes depending on the inputted values.
 * 
 * 6. Scope: Function's have their own scope. code in the function block has access to variables in it's own function's scope along with any variables in any of the
 * scopes that contain said function. Any variables locked to the scope of another function or code block that is either located within the current function block or
 * does not contain the current function block cannot be accessed within the current function block.
 * 
 * 7. Closures: Closures are functions that are returned from other functions and that have access to their own personal copies of the variables that were outside of its
 * scope but within the scope of the function that returned said inner function. Closures can keep track of and modify these invisible copies of these variables.
 */

// 1.1 defining and then calling a function //
// 
function someFunction() {
    console.log("Hi");
};

someFunction(); // prints => "Hi"

// 2.1 parameters and arguments //
// 
function someFunction2(par1, par2, par3 = 3, par4 = 4, par5) {
    console.log(par1, par2, par3, par4, par5);
};

someFunction2(1, 2, 3); // prints => 1, 2, 3, 4, undefined

// 3.1 named function syntax //
// 
function thisIsMyName(thisIsMyParameter) {
    console.log("this is my code to run"); // would print "this is my code to run" if the function exectued
};

// 4.1 assigning functions to variables //
// 
const someFunction3 = function (par) {
    console.log(par);
};
const someFunction4 = (par) => {
    console.log(par + "!!!");
};

someFunction3("Hello"); // prints => "Hello"
someFunction4("Hello"); // prints => "Hello!!!"

// 5.1 specifying inputs and outputs //
// 
const someFunction5 = function (x, y) {
    return x + y;
};

console.log(someFunction5(6, 9)); // prints => 15

// 6.1 scope //
// 
var snickle = "snickle!";

function someFunction6(x, y) {
    function someInnerFunction() {
        var pickle = "pickle";
        console.log(x); // prints => 6
        console.log(snickle); // prints => "snickle!"        
    };
    someInnerFunction();
    someFunction7();
    console.log(y); // prints => 9
    console.log(pickle); // prints => "ReferenceError: pickle is not defined"
    console.log(snickers); // prints => "ReferenceError: snickers is not defined"
};

function someFunction7() {
    var snickers = "Snickers";
};

someFunction5(6, 9);

// 7.1 closures //
// 
const someFunction8 = function (x, y) {
    let secretVariable = "Hello";
    return function (input) {
        secretVariable += " " + x + " and " + y + " and " + input;
        return secretVariable;
    };
};

const newFunc = someFunction8("V1", "Jenny");
console.log(newFunc("Joel")); // prints => "Hello V1 and Jenny and Joel"
console.log(newFunc("Cupa")); // prints => "Hello V1 and Jenny and Joel V1 and Jenny and Cupa"
const newFunc2 = someFunction8("Koyoko", "Shiroko");
console.log(newFunc2("Gabriel")); // prints => "Hello Koyoko and Shiroko and Gabriel"
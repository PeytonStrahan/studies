/**
 * 0: Variables are named containers for storing data. (... add a few more sentences to describe variables)
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
 * variable was initialized on or on a line after it; we can type the variable's name (if it wasn't already typed out when tryint to initalize and assign a variable on the same line),
 * type the assignment operator (=), and then type out whatever value you want to assign the variable to. This process can be repeated to reassign different values to the same
 * variable, replacing the old value each time it is done.
 * 
 * 2. Var, let, const: There are three declarative keywords that can be used to declare variables--var, let, const. (.. describe each keyword in detai)
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
 * 3: Hoisting: (... describe hoisting in detail) Hoisting is when function and variable declarations are moved to the top of their scope during the program's compilation phase
 * (before the program actually begins). This allows the the program to use functions (in their scope) before they are defined. Variables work a little differently.
 * Variable declarations (but not their initializations nor their assignments) are hoisted to the top of their scope, causing the variable to "initialize" and point to
 * the value of undefined from the beggining of the program until the part in the program that assigns a value to them is ran. While this works normally for var variables
 * (meaning that accessing a var variable before it is declared or assigned a value results in getting undefined), trying to access a let or const variable before they
 * are declared results in a special error that prevents you from doing so. Fun fact: function expressions (function definitions stored in a variable) follow the hoisting
 * rules for whatever variable keyword was used to create the variable that they are stored in instead of the hoisting rules for function declarations, meaning that they
 * can't be used before they are declared.
 */


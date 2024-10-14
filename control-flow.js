/**
 * 0: Control Flow is the order and way in which a program executes its code. Control flow usually goes over everything from top to bottom, but can be
 * manipulated with things like conditional statements (which only run under the right conditions) and loops (which run multiple times until a condition is met)
 * 
 * 1. If: If statements contain code that only runs if the statement's conditional statement returns true. If statements are structured like: if (conditional) {code to run};
 * 
 * 2. Else-if: Else-if statements contain code that only runs if the statement's conditional statement returns true and if the previous if or else-if statement that the
 * current else-if statement is attached to didn't run its code due to its conditional returning false. If statements are structured like: {code block of previous statement} else if (conditional) {code to run};
 * 
 * 3. Else: Else statements run their code when every other if and else-if statement in the chain failed to run their code due to failing conditional checks that all returned false.
 * Else statements have no conditional to check, thus they look like: {code block of previous statement} else {code to run}.
 * 
 * 4. Switch: Switch statements are different than If, else-if, and else statements in that switch statement take in a value and compares it to several pre-determined values called cases.
 * When a switch statement finds a matching case, it starts to run all of the code located within/after that case until it either reaches a break keyword or the end of the switch statement.
 * Because of this, multiple cases can be attached to the same block of code or different portions of the same block of code. The default keyword can be used to specify the code to run
 * if none of the cases in the switch statement match the input value.
 * 
 */

// 1.1 if //
// 
var someVariable = 10;

if (someVariable > 5) {
    console.log(someVariable + " is greater than 5"); // prints => "10 is greater than 5"
}

// 2.1 else-if //
// 
var someVariable = 20;

if (someVariable > 999) {
    console.log(someVariable + " is greater than 999"); // prints nothing because it isn't run
} else if (someVariable === 20) {
    console.log(someVariable + " is exactly 20"); // prints => "20 is exactly 20"
}

// 3.1 else //
// 
var someVariable = "swaws";

if (someVariable > 999) {
    console.log(someVariable + " is greater than 999"); // prints nothing because it isn't run
} else if (someVariable === 20) {
    console.log(someVariable + " is exactly 20"); // prints nothing because it isn't run
} else {
    console.log(someVariable); // prints => "swaws"
}

// 4.1 switch //
// 
var someVariable = "ruhroh";

var message = "That is "

switch (someVariable) {
    case "bark":
    case "whine":
        message += "possibly ";
    case "ruhroh":
    case "raggy":
        message += "Scoobs!";
        break;
    default:
        message += "not Scoobs.";
}

console.log(message); // prints => "That is Scoobs!"
/**
 * 0: Loops are blocks of code that repeadedly runs itself over and over again while incrementing, decrementing, or otherwise changing a value until said value
 * is no longer able to pass a specified condition, causing the loop to stop running its code.
 * 
 * 1. While, for, and for-in loops: While loops are simple in that all they do is run their block of code over and over again until the loop's given condition
 * returns false, causing the loop to stop. In order for a while loop to be able to stop, a variable from outside of the loop (specifically one being
 * used/compared in the loop's condition) must be altered from within the loop in such a way that each time it is altered, it brings said variable one step
 * closer to failing the condition until it finally does fail the condition. For loops are just while loops that make sure to include
 * the variable (and its beginning value) that's being compared in the condition and the code responsible for incrementing or decrementing said value
 * alongside the condition itself. Both the while loop and for loop can be used to increment/decrement a number variable in order to loop through
 * the items in an array (or string). In order to loop through an object, it is usually easiest to use a for-in loop, which takes in a variable name
 * to hold each key and an object and then proceeds to run the code in its code block one time for each property in the object, setting the current key name
 * to the for-in loop's given variable name so that it may be used to access and possibly mutate each property in the given object.
 * 
 * 2. You can loop any number of times, forward counting up to some limit, backward counting down to 0: You can loop from 0 to a limit by using a for loop that initializes
 * its counter as 0, keeps running as long its counter is less than (or "less than or equal to" if you want to include the limit), and increments the number by 1 each time the loop completes.
 * You can loop from the limit backwards to 0 by using a for loop that initializes its counter as the limit (or limit - 1 if you wish to not include it), keeps running as long its counter is
 * greater than or equal to 0, and decrements the number by 1 each time the loop completes.
 * 
 * 3. Loop over an Array, forwards and backwards: To loop forwards over an array, you can use a for loop that initializes its counter as 0, keeps running as long its counter is less than the
 * array's length, and increments the number by 1 each time the loop completes. To loop backwards over an array, you can use a for loop that initializes its counter as the array's length - 1,
 * keeps running as long its counter is greater than or equal to 0, and decrements the number by 1 each time the loop completes.
 * 
 * 4. Loop over an Object: To loop over an object, you can simply use the previously-mentioned for-in loop, which runs it's code block once for each property
 * in the object while setting its given variable name to the key name of the current property on each run so that it may be used with bracket notation
 * to access and/or mutate each property in the object.
 */

// 1.1 while loop //
// 
var counter = 0;
while (counter < 5) {
    console.log(counter); // prints => 0, 1, 2, 3, 4
    counter++;
}

// 1.2 for loop //
// 
for (let counter = 0; counter < 5; counter++) {
    console.log(counter); // prints => 0, 1, 2, 3, 4
}

// 1.3 for-in loop //
// 
var someObject = {
    pet1: "cat",
    pet2: "dog",
    pet3: "chameleon",
};

for (let key in someObject) {
    console.log(someObject[key]); // prints => "cat", "dog", "chameleon"
}

// 2.1 loop up then down //
// 
var limit = 5;
for (let counter = 0; counter < limit; counter++) {
    console.log(counter); // prints => 0, 1, 2, 3, 4
}
for (let counter = limit - 1; counter >= 0; counter--) {
    console.log(counter); // prints => 4, 3, 2, 1, 0
}

// 3.1 loop up then down through array //
// 
var someArray = ["a", "b", "c", "d"];
for (let counter = 0; counter < someArray.length; counter++) {
    console.log(someArray[counter]); // prints => "a", "b", "c", "d"
}
for (let counter = someArray.length - 1; counter >= 0; counter--) {
    console.log(someArray[counter]); // prints => "d", "c", "b", "a"
}

// 4.1 loop over an object //
// 
var somePerson = {
    name: "Carl",
    age: 47,
    lonely: true
};
for (let key in somePerson) {
    console.log(somePerson[key]); // prints => "Carl", 47, true
}
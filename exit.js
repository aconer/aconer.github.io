// Save this file as exit.js
// -----------------------------------------------------------------------------------------------------------

// 1. Create an array with numbers 1, 2, 3 and assign it to a variable called 'myArray' //

// ANSWER //


let myArray = [1, 2 ,3];

// -----------------------------------------------------------------------------------------------------------

// 2. Using the array you just created, step through this function,
// tell me what it does and give it a one-word name:

function whatFunctionAmI(array) {
  return _.map(array, function(e, i, a) {
      return a[a.length - (i + 1)];
  });
}
var result = whatFunctionAmI(myArray); // result === what?

// ANSWER //

//This function takes a collection and loops through it utilizing the map function to search through myArray 
//and it returns the length of the array subtracting each position of i plus 1.
//the result prints out a new array containing the elements 2, 1 and 0.

// -----------------------------------------------------------------------------------------------------------

// 3. What does this function do? What could we do with it to get the most use out of it? //

function greatThan2(value) {
  return value > 2;
}

// ANSWER //

//This function takes a value and returns that value if it is greater than 2. 
//To get the most of this function you can use the myArray
//to determine which values are greater than 2.
    
// -----------------------------------------------------------------------------------------------------------

// 4. Given the above function and the 'myArray' array you made earlier, name
// the two higher-order functions that are in use to produce the following results:

var result = myHigherOrderFunction(myArray, greatThan2); // (result === false)
var result = myHigherOtherOrderFunction(myArray, greatThan2); // (result === [3])

// ANSWER //

//1. Makes use of the every function.
//2. Makes use of the filter function.
// -----------------------------------------------------------------------------------------------------------

/*
 * 5. jQuery:
 * assign to a variable a jQuery created <div>
 * give it an id (use a method),
 * give it a class (use a method),
 * give it the text 'Hello World',
 * and attach it to the body tag
 * YOU MUST use the correct jQuery API
*/

// ANSWER //





// -----------------------------------------------------------------------------------------------------------

// 6. Imagining you had a CSS file, create a CSS selector that would target the
// div you just created and give it a background color of white:

// ANSWER //

// CSS FILE //




// -----------------------------------------------
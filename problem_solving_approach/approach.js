// Devise a plan to solve a problem
/***
 *
 * STEP 1
 * Understand the problem
 *
 */
/***
 * Questions to ask to understand the problem:
 * 1 Can I restate the problem in my own words?
 * 2 What are the inputs that go into the problem?
 * 3 What are the outputs that should come from the solution to the problem?
 * 4 Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
 * 5 How should I label the important pieces of data that are a part of the problem?
 */

// Write a function which takes tow numbers and returns their sums:

// 1 Can I restate the problem in my own words?
//  "Implementing addition"

// 2 What are the inputs that go into the problem?
//  Are the inputs integers, floats, strings? How big are the numbers? Are there only 2 inputs, how many inputs are there?

// 3 What are the outputs that should come from the solution to the problem?
//  What should be returned? A string, float, int etc

// 4 Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
//  What if someone inputs one number?

// 5 How should I label the important pieces of data that are a part of the problem?
//  Should the function be named add? What should the inputs be named? num1,num2? Should the returned value be named sum?

/***
 * STEP 2
 *Explore Concrete Examples
 *
 *
 */

//
// Coming up with examples can help you understand the problem better
//
// Examples also provide sanity checks that your eventual solution works how it should
// User stories and unit tests should help layout how something should work

// Explore examples
// Start with Simple Examples
// Progress to more Complex examples
// Explore Examples with Empty Inputs
// Explore Examples with Invalid Inputs

/***
 * Examples
 * Write a function which takes in a string and returns counts of each character in the string
 */

// 1 Can I restate the problem in my own words?
// Create a function that counts the occurrences of a letter in a string and returns an object with each char and its number of occurrences
// 2 What are the inputs that go into the problem?
// The input is a string of chars
// 3 What are the outputs that should come from the solution to the problem?
// the output is an object which has the char and its number of occurrences as key value pairs
// 4 Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// Yes. I can count the string easily and output the information as an object.
// 5 How should I label the important pieces of data that are a part of the problem?
// The information should be output as an object that hold the count as an int and the value as a string representing what was counted

/***
 *  Break It Down
 * STEP 3
 *  */

// Explicitly write out the steps you need to take

// function charCount(str){
//     // do something
//     // return an object with keys that are alphanumeric characters in the string; values should be the count of the char
// }

function charCount(str) {
  // make an object to return at the end
  let result = {};
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    // set string to lowercase
    let char = str[i].toLowerCase();
    // if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    // if the char is a number/letter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    }
  }
  // if char is something else (space, period, etc) don't do anything
  // Return object at end
  return result;
}

console.log(charCount('I am the best'));
/***
 * Solve and Simplify
 * STEP 4
 */

// find the core difficulty in what you're trying to do
// temporarily ignore that difficulty
// write a simplified solution
// then incorporate that difficulty back in

// Look back and refactor

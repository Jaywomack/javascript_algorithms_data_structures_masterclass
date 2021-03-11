// write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

// this is a naive solution with a time complexity of n^2
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

/***
 * Refactored Solution that has a time complexity of O(n)
 */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
console.log(same([1, 2, 3], [1, 4, 10]));

/***
 * Anagrams
 *
 * Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 */

// Using the frequency counter pattern
// function isAnagram(first, second){
//   // If the string are not the same length return false
//   if(first.length !== second.length){
//     return false
//   }
//   // Instantiate two objects to record the frequencies of the letters in the strings
//   const lookup = {}
//   // For every char add the value of that char to the object
//   for(let val of first){
//     lookup[val] = (lookup[val] || 0) +1
//   }

//   // Compare the objects to one another and return false if they do not contain the same chars at the same frequency
//   for(let char in second){
//     if(counter2[key] !== )
//   }

// }

// Tutorial solution using frequency counter

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  // create an object to fill with key value pairs
  const lookup = {};
  // Use a for loop to create an object with the letters and their frequency
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if exists increment, otherwise set to one
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  // loop and check for matches in first object
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // If the value is zero or does not exist returns false
    if (!lookup[letter]) {
      return false;
    }
    // decrements the count to check for exact match to first object
    else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram('jaredisthebest', 'bestthejaredis'));

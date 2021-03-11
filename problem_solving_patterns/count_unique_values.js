/***
 * COUNT UNIQUE VALUES
 *
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
 */

// returns a count of how many unique numbers are in the array
// countUniqueValues([1,1,1,2,2,2,3,3,3]) // returns 3
function countUniqueValues(arr) {
  //set first pointer to 0
  let i = 0;
  if (arr.length === 0) {
    return 0;
  }
  // with a for loop compare pointer one to a pointer set ahead if the numbers match then the for loop keeps iterating as soon as the numbers do not match add 1 to i and set the value of i to j.
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // return the index of i + 1
  return i + 1;
}

let numUnique = countUniqueValues([
  1,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  6,
  6,
  6,
  7,
  7,
  7
]);
console.log(numUnique);
console.log(countUniqueValues([]));

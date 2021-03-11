/***
 * Sum Zero
 *
 * Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sym to zero or undefined if a pair does not exist
 */

// function sumZero(arr) {
//   // return array at end
//   let results = [];
//   // check each number against the rest in the string to see if there sum equals 0 and append them to an array if they do otherwise return undefined
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (num + arr[arr.length - 1] === 0) {
//       results = [num, arr[arr.length - 1]];
//       console.log(num);
//       console.log(arr[arr.length - 1]);
//       arr.pop();
//     } else {
//       results = undefined;
//     }
//   }
//   return results;
// }

/***
 * Naive Solution
 *
 * time complexity is quadratic O(n^2)
 * space complexity is constant O(1)
 */

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}

console.log(sumZero([-7, -6, -1, 0, 1, 2, 3]));
console.log(sumZero[(1, 2, 5, 56)]);

// Using the multiple pointers pattern on a sorted array
// Time complexity is Linear O(n)
// Space complexity is constant O(1)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

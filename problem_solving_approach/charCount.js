const charCount = function (str) {
  //Return object at the end
  let obj = {};
  // iterate through string and add the chars to the object
  for (let i = 0; i < str.length; i++) {
    // Set the characters to lowercase
    let char = str[i].toLowerCase();

    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
};

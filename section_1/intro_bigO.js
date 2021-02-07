// O(n) grows as n grows
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// O(1) stays constant as n grows
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

// O(n*n) when a loop is nested within another loop
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

printAllPairs(10);

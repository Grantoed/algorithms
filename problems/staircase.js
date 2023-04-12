function staircase(steps) {
  const numberOfWays = [1, 2];
  for (let i = 2; i <= steps; i++) {
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
  }
  return numberOfWays[n - 1];
}

console.log(staircase(1)); // 1
console.log(staircase(2)); // 2
console.log(staircase(3)); // 3
console.log(staircase(4)); // 5

// Big-O: O(n)

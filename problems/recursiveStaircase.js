function recursiveStaircase(steps) {
  if (steps === 1 || steps === 2) {
    return steps;
  }

  return recursiveStaircase(steps - 2) + recursiveStaircase(steps - 1);
}

console.log(recursiveStaircase(1)); // 1
console.log(recursiveStaircase(2)); // 2
console.log(recursiveStaircase(3)); // 3
console.log(recursiveStaircase(4)); // 5

//Big-O: O(2^n)

// With "for" loop

const arr = [-5, 2, 10, 4, 6];

function linearSearch(n) {
  let index = 0;
  for (number of arr) {
    if (number === n) {
      return index;
    }
    index += 1;
  }
  return -1;
}

console.log(linearSearch(10)); // 2;
console.log(linearSearch(6)); // 4;
console.log(linearSearch(20)); // -1;

// With "for in" loop

function altLinearSearch(target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(altLinearSearch(10)); // 2;
console.log(altLinearSearch(6)); // 4;
console.log(altLinearSearch(20)); // -1;

// Big-O: O(n)

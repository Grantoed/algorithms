function quick(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quick(left), pivot, ...quick(right)];
}

const arr = [8, 20, -2, 4, -6];
console.log(quick(arr)); // [-6, -2, 4, 8, 20]

// Worst case - O(n^2) if the array is already sorted
// Avg case O(nlogn)

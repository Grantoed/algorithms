const arr = [-5, 2, 4, 6, 10];

function recursiveBinarySearch(target) {
  return search(target, 0, arr.length - 1);
}

function search(target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(target, leftIndex, middleIndex - 1);
  } else {
    return search(target, middleIndex + 1, rightIndex);
  }
}

console.log(recursiveBinarySearch(10)); // 4;
console.log(recursiveBinarySearch(6)); // 3;
console.log(recursiveBinarySearch(20)); // -1;

// Big-O: O(logn)

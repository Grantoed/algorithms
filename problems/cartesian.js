function cartesian(arr1, arr2) {
  const cartesianProduct = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      cartesianProduct.push([arr1[i], arr2[j]]);
    }
  }
  return cartesianProduct;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesian(arr1, arr2));

// Big-O = O(mn)

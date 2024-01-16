function search(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target >= arr[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    }
  }
}

console.log(search([1, 2, 3, 4, 5], 3));

//binary search with recursion
function recSearch(arr, target, leftIndex = 0, rightIndex = arr.length - 1) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    rightIndex = middleIndex - 1;
    return recSearch(arr, target, leftIndex, rightIndex);
  } else {
    leftIndex = middleIndex + 1;
    return recSearch(arr, target, leftIndex, rightIndex);
  }
}

console.log(recSearch([1, 2, 3, 4, 5], 0));

//Array needs to be sorted
//average and worst cast time complexity - O(NlogN)

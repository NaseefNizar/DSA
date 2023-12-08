
// function quickSort(arr) {
//   return quickSortAuxillary(arr, 0, arr.length - 1);
// }

// function quickSortAuxillary(arr, left, right) {
//   if (left < right) {
//     const middle = partition(arr, left, right);
//     quickSortAuxillary(arr, left, middle - 1);
//     quickSortAuxillary(arr, middle + 1, right);
//   }
//   return arr
// }

// function partition(arr, left, right) {
//   const pivot = arr[right];
//   let i = left;
//   for (let j = left; j < right; j++) {
//     if (arr[j] < pivot) {
//       swap(arr, i++, j);
//     }
//   }
//   if (arr[right] < arr[i]) {
//     swap(arr, i, right);
//   }
//   return i;
// }

// function swap(arr, i, j) {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }



function quickSort(arr,left = 0, right = arr.length - 1) {
  if (left >= right) {
    return ;
  }

  const pivotIndex = partition(arr,left, right);
  quickSort(arr,left, pivotIndex - 1);
  quickSort(arr,pivotIndex + 1, right);
  return arr;
}

function partition(arr,left, right) {
  const pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

// let arr = [1,0,2,3,5,8,9,7]
//[1,0,2,3,5,7,9,8]
//[0,1,2,3,5,7,9,8]
// const arr = [1,-5,6,0,-1,55,-555]

console.log(quickSort([1,.5,2,3,5,8,9,7]));
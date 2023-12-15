// bubble sort
// Big-O = O(n^2)
//best-case - O(n)
//average-case - O(n^2)
//worst-case - O(n^2)
const arr = [1, -5, 6, 0, -1, 55, -555];


function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// for (j = 0; j < arr.length - 1; j++) {
//     let swapped = true
//   for (i = 0; i < arr.length - j - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//       swapped = true;
//     }
//   }
//   if(!swapped)  break
// }

// console.log(arr);
// bubbleSort(arr);
console.log(arr);

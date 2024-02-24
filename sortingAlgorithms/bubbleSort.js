// bubble sort
// Big-O = O(n^2)
//best-case - O(n)
//average-case - O(n^2)
//worst-case - O(n^2)

// const arr = [1, -5, 6, 0, -1, 55, -555];



//Bubble sort with do while loop

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


//Bubble sort with normal for loop

let arr = [64, 34, 25, 12, 22, 11, 90]
for (let i = 0; i < arr.length - 1; i++) {
    let swapped
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      swapped = true;
    }
  }
  if(!swapped)  break
}

// bubbleSort(arr);
console.log(arr);

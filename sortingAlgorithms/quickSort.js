//quick sort with no extra arrays
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }

  const pivotIndex = partition(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
  return arr;
}

function partition(arr, left, right) {
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

console.log(quickSort([1, 0.5, 2, 3, 5, 8, 9, 7]));

// averageCase - O(nlogn)
// worstCase - O(n^2)



//quick sort with extra arrays
function sort(arr){
  if(arr.length < 2){
      return arr
  }
  let pivot = arr[arr.length-1]
  let leftArr = []
  let rightArr = []
  for(i=0;i<arr.length-1;i++){
      if(a[i]>pivot){
          rightArr.push(a[i])
      } else{
          leftArr.push(a[i])
      }
  }
  return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}
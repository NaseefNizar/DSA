//binary search

// function search(arr,target){
//   let leftIndex = 0;
//   let rightIndex = arr.length-1
//   while(leftIndex <= rightIndex){
//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//     if(target === arr[middleIndex]){
//       return middleIndex
//     }
//     if(target >= arr[middleIndex]){
//     leftIndex = middleIndex+1
//     }
//     else if(target < arr[middleIndex]){
//       rightIndex = middleIndex-1
//     }
//     }
//   }

  console.log(search([1,2,3,4,5],3));


// --------------------------------------------------------------------------------
  // function binarySearch(arr,target){
  //   return search(arr,target,0,arr.length-1)
  // }

  //binary search with recursion
  function search(arr,target,leftIndex=0,rightIndex=arr.length-1){
    if(leftIndex > rightIndex){
      return -1
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if(target === arr[middleIndex]){
      return middleIndex
    }
    if(target < arr[middleIndex]){
      rightIndex = middleIndex-1
      return search(arr,target,leftIndex,rightIndex)
    }
    else{
      leftIndex = middleIndex + 1
      return search(arr,target,leftIndex,rightIndex)

    }
}

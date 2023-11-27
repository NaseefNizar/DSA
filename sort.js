//bubble sort
// Big-O = O(n^2)
// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped = false
//     for(i=0;i<arr.length-1;i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//     }
// }
// while(swapped)
//     return arr
// } 
 
// const arr = [1,-5,6,0,-1,55,-555]
// bubbleSort(arr)
// console.log(arr);

// --------------------------------------------------------------------------------------------
// insertion sort
// Big-O = O(n^2)
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let target = arr[i]
        let j = i-1
        while(j>=0 && arr[j] > target){
            arr[j+1]=arr[j]
            j = j-1
        }
        arr[j+1] = target
    }
}

insertionSort(arr)
console.log(arr);

// --------------------------------------------------------------------------------------------------

//quick sort
// Big-O = O(n^2)
//Avg case -O(nlogn)
function quickSort(arr){
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
// let q =[3,2,-4,5,6,-7]
// console.log(mergeSort(q))

// ------------------------------------------------------------------------------

//mergesort
// Big-O = O(nlogn)

function mergeSort(arr){
    if(arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
    function merge(leftArr,rightArr){
        const sortedArr = []
        while(leftArr.length && rightArr.length) {
            if(leftArr[0] <= rightArr[0]) {
                sortedArr.push(leftArr.shift())
            } else {
                sortedArr.push(rightArr.shift())
            }
        }
        return [...sortedArr, ...leftArr, ...rightArr]
    }
    let a=[5,15,25]
    let b=[30,20,10]
    // console.log( merge(a,b))
    // let arr=a.concat(b)

console.log(merge(a,mergeSort(b)));


//selectionsort

// let a = [5,2,4,6,1,3]
for(let i=0;i<a.length-1;i++){
    let min = i
    for(let j=i+1;j<a.length;j++){
       
        if(a[min]>a[j]){
             min = j

        }
    }
    if(i != min){
        temp = a[i]
        a[i] = a[min]
        a[min] = temp
    }
}
console.log(a);

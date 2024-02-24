
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let target = arr[i]
        let j = i-1
        while(j >= 0 && arr[j] > target){
            arr[j+1] = arr[j]
            j = j-1
        }
        // console.log(arr);
        arr[j+1] = target
    }
}


const arr = [1, -5, 6, 0, -1, 55, -555];
// const arr = [2,1,3,7,5];


insertionSort(arr)
console.log(arr);


//more efficient than selection and bubble sort in practical scenarios
//best-case - O(n)
//average-case - O(n^2)
//worst-case - O(n^2)
// Big-O = O(n^2)
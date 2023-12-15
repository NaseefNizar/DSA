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
            

console.log(merge(a,mergeSort(b)));


//space complexity - theta(n)
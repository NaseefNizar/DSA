// const a = [1, -5, 6, 0, -1, 55, -555];
const a = [2,1,3,7,5];
 
for(let i=0;i<a.length-1;i++){
    let min = i
    for(let j=i+1;j<a.length;j++){
       
        if(a[min]>a[j]){
             min = j
        }
    }
    // if(i != min){
        temp = a[i]
        a[i] = a[min]
        a[min] = temp
}


console.log(a); 


// best-case - O(n^2)
// average-case - O(n^2)
// worst-case - O(n^2)
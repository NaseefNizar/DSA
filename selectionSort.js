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
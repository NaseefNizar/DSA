
// var obj = {
// 	a: "hello world",
// 	b: 42
// };

// var b = "a";

// obj[b];			// "hello world"
// obj["b"];		// 42


// function modifyArray(arr, callback) {
//     // do something to arr here
//     arr.push(100);
//     // then execute the callback function that was passed
//     callback();
//   }
  
//   var arr = [1, 2, 3, 4, 5];
  
//   modifyArray(arr, function() {
//     console.log("array has been modified", arr);
//   });
// var x = 220;
// var y = "Hello";
// var z = undefined;
        
// x || y    // Returns 220 since the first value is truthy
        
// x || z   // Returns 220 since the first value is truthy
        
// x && y    // Returns "Hello" since both the values are truthy
        
// y && z   // Returns undefined since the second value is falsy
        
// if( x && y ){ 
//   console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
// }   
        
// if( x || z ){
//   console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
// }
//  console.log( isNaN('5')); 

// var obj = { name: "Vivek", surname: "Bisht" };  // obj pointing to address of { name: "Vivek", surname: "Bisht" }
// var obj2 = obj;
    
//  // obj2 pointing to the same address 

// // changing the value of obj1
        
// obj.name = "Akki";
// console.log(obj2);


// // doubt for reviewer
// function higherOrder2() {
//        return function add(){
//       console.log("Do something");
//     };
//     add()
    
//   };      
//  let x = higherOrder2();
// //   x()  
//   higherOrder2()


// function doSomething() {
//     console.log(this);
//   }
     
//   doSomething();

// var obj = {
//     name:  "vivek",
//     getName: function(){
//     console.log(this.name);
//   }
// }
   
// obj.getName();

// var obj = {
//     name:  "vivek",
//     getName: function(){
//     console.log(this.name);
//   }
     
// }
       
// var getName = obj.getName;
       
// var obj2 = {name:"akshay", getName };
// obj2.getName();


// function sayHello(){
//     return console.log("Hello " + this.name);
//   }
          
//   var obj = {name: "Sandy"};
          
//   sayHello.call(obj);
  
// /-------------------------------------------------
// closure
// var Person = function(pName){
//     var name = pName;
  
//     this.getName = function(){
//       return name;
//     }
//   }

//   var person = Person("jo");
//   console.log(getName());


//   var person = new Person("akhil");
//   console.log(person.getName());
// ---------------------------------------------------
 //callback
// function divideByHalf(sum){
//     console.log((sum / 2));
//   }
  
//   function multiplyBy2(sum){
//     console.log(sum * 2);
//   }
  
//   function operationOnSum(num1,num2,operation){
//     var sum = num1 + num2;
//     operation(sum);
//   }
//   operationOnSum(3, 3, divideByHalf); // Outputs 3

// operationOnSum(5, 5, multiplyBy2); // Outputs 20
// --------------------------------------------------------------------------

// memoization
// function memoizedAddTo256(){
//     var c= {};

  
//     return function(num){
//       if(num in c){
//         console.log(c);
//         return console.log(c[num]);
        
//       }

//       else{
//         c[num] = num + 256;
//         // retuchern c[num];
//         return console.log(c[num]);

//       }
//     }
   

//   }
//   var memoizedFunc = memoizedAddTo256();
  
  
//   memoizedFunc(20); // Normal return
//   memoizedFunc(20); // c return

 

//  =---------------------------------------------------------------

// const p = [{name:"naseef",mark:10}];
//     console.log(p.name)
//     p.push({name:"nijas",mark:30})
//     console.log(p)
//     // console.log(p.pop())
//     // console.log(p)
    
    
//     console.log(p[0].name='noName')
//     console.log(p)

// constructor fn
// function Person(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//  ----------------------------------------------------- 
  
//   var person1 = new Person("Vivek", 76, "male");
//   console.log(person1);
  
//   var person2 = new Person("Courtney", 34, "female");
//   console.log(person2);

// index element of string
// let a="naseef"

// console.log(a.charAt());
// ----------------------------------------------------------------

// var variable1 = 23;

// let variable2 = 89;
// var a
// function catchValues(){
// a=42
//   console.log(variable1);
//   console.log(variable2);
//   b=a+2

// // Both the variables can be accessed anywhere since they are declared in the global scope
// }
// catchValues()
// console.log(a);

// window.variable1; // Returns the value 23

// window.variable2; // Returns undefined
// ----------------------------------------------------------------------------------------
// function addFourNumbers(num1,num2,num3,num4){
//     return num1 + num2 + num3 + num4;
//   }
  
//   let fourNumbers = [5, 6, 7, 8];
  
  
//   addFourNumbers(...fourNumbers);
//   // Spreads [5,6,7,8] as 5,6,7,8
  
//   var array1 = [3, 4, 5, 6];
//   let clonedArray1 = [...array1];
//   // Spreads the array into 3,4,5,6
//   console.log(clonedArray1); // Outputs [3,4,5,6]
  
  
//   let obj1 = {x:'Hello', y:'Bye'};
//   let clonedObj1 = {...obj1}; // Spreads and clones obj1
//   console.log(obj1);
  
//   let obj2 = {z:'Yes', a:'No'};
//   let mergedObj = {...obj1, ...obj2}; // Spreads both the objects and merges it
//   console.log(mergedObj);
// -----------------------------------------------------------------------------------------

// function sumOfThreeElements(...elements){
//     return new Promise((resolve,reject)=>{
//       if(elements.length > 3 ){
//         reject("Only three elements or less are allowed");
//       }
//       else{
//         let sum = 0;
//         let i = 0;
//         while(i < elements.length){
//           sum += elements[i];
//           i++;
//         }
//         resolve("Sum has been calculated: "+sum);
//       }
//     })
//   }
// //   let elements =[1,2,3,4]
// //   console.log(sumOfThreeElements(...elements));
// sumOfThreeElements(4, 5, 6,7)
// .then(result=> console.log(result))
// .catch(error=> console.log(error));
// -----------------------------------------------------------------------


// const newSet = new Set([4, 5, 6, 7]);
// // console.log(newSet);// Outputs Set {4,5,6,7}

// // const newSet2 = new WeakSet([3, 4, 5]); //Throws an error


// let obj1 = {message:"Hello world"};
// const newSet3 = new WeakSet([obj1]);
// console.log(newSet3.has(obj1)); 

// ---------------------------------------------------------------------------------

// function func1(){
//     setTimeout(()=>{
//       console.log(x);
//       console.log(y);
//     },3000);
  
//     var x = 2;
//     let y = 12;
//   }
//   func1();
  
//   Code 2:
  
//   function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000);
//   }
//   }
//   func2();
  
  // Code 3:
  
//   (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
//   })();

// -----------------------------------------------------------------------

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }


// let arr  = [1,2,3,4,5]
// let sum=0
// arr.forEach(function(a){
//     sum=sum+a
//     console.log(sum);
//     console.log(a+sum);
// })

// for (const i of arr) {
//     console.log(i*2);
// }
// console.log(arr);

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce(function (result, item) {
//   return result + item;
// },10);
// console.log(sum); // 10
// ----------------------------------------------------------------------
// const arr = [1, 2, 3, 4];
// const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum);
// const newArr = arr.map((item, index) => item + index);
// console.log(newArr);
// arr.forEach(function(number) {
//     console.log(number+1);
// });
// console.log(arr);
// -----------------------------------------------------------------------
// let numbers = ["a","a","b","c"]
// const letters = new Set(numbers);
// console.log(letters);
// const letters1 = new Set(["a","b","c"]);
// console.log(letters1);

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   console.log(fruits);

// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};

// // Create a Map
// const fruits = new Map();

// // Add new Elements to the Map
// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);
// console.log(fruits);


// var obj = { name: "Vivek", surname: "Bisht" };
// var obj2 = obj;
// obj2.name='naseef';
// obj2.surname='nizar'
// console.log(obj);
// let a=100
// let b=a;
// b=b+2
// console.log(a);
// console.log(b);

// let obj = {
//     firstName :"naseef",
//     lastName:'nizar',
//     fullName:function(msg){
//         return console.log(`${this.firstName}${ this.lastName} ${msg}`)
// }
// }
// let obj1 ={
//     firstName : 'akhil',
//     lastName :'p'
// }
// obj.fullName.call(obj1,"good morning")
// obj.fullName.apply(obj1,["good morning"])

// let newFunc=obj.fullName.bind(obj1,["good morning"])
// newFunc()



// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
//   ];
  
//   const studentGrades = students.filter(student => student.grade >= 90);
//   console.log( studentGrades);

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce(function (result, item) {
//   return result + item;
// }, 0);
// console.log(sum);

// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(function(){
//       resolve("done!"), 1000
//     })
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
//   console.log(result)
    
//   }
  
//   f();



// function divide(a, b) {
//     if (b == 0) {
//       throw "Cannot divide by 0!";
//     }
//     return a / b;
// }

// try {
//   console.log(divide(10, 2));
//   console.log(divide(10, 0));
// } catch (error) {
//   console.log(error);
// }

// let x={
//     name:"naseef",
//     age:24,
//     domain:"MERn"
// }
// x.forEach(element => {
//     return console.log(element);
    
// });

// console.log(Object.keys(x))

// let y = '5'
// let x =+y
//  console.log(typeof(y));
// console.log(y);
//  console.log(typeof(x));
// console.log(x);

// console.log(Number(y))

// let y = 'naseef'
// let x =+y
// console.log(y);
// console.log(typeof(y));
// console.log(typeof(x));
// console.log(x);


// exception
// function divide(a, b) {
//   if (b == 0) {
//     throw "Cannot divide by 0!";
//   }
//   return a / b;
// }

// try {
// console.log(divide(10, 2));
// console.log(divide(10, 0));
// } catch (error) {
// console.log(error);
// }

// let a=10;
// (function b(){
//  a=5;

// })()
// console.log(a);

// var e=15

// function a(){
// b()
//   function b(){
//     c()
//     function c(){
//       console.log(e);
//     }
//   }
// }

// a()

// -----------------------------------------------------------------------------------------------

// function createCounter() {
//   let count = 0;
//   return function increment() {
//     count += 1;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


// function a(){
// let a=['a']
// let b=['a']
// let a = "samad"
// let b ="samad"
// if(a===b){
//   return 1
// }else{
//   return 2
// }
// }
// console.log(a())

// let codespeedy = ["samim",  "saruque", "faruque"];
// let uppercase = codespeedy.map((element,index) => 
//   element.toUpperCase());
// }

// codespeedy[0]= codespeedy[0].toUpperCase()
// codespeedy[codespeedy.length-1]= codespeedy[codespeedy.length-1].toUpperCase()
// console.log(codespeedy);

// ------------------------------------------------------------------------------
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

//   console.log(search([1,2,3,4,5],3));


// --------------------------------------------------------------------------------
  // function binarySearch(arr,target){
  //   return search(arr,target,0,arr.length-1)
  // }

  //bonary search with recursion
  // function search(arr,target,leftIndex=0,rightIndex=arr.length-1){
  //   if(leftIndex > rightIndex){
  //     return -1
  //   }
  //   let middleIndex = Math.floor((leftIndex+rightIndex)/2)
  //   if(target === arr[middleIndex]){
  //     return middleIndex
  //   }
  //   if(target < arr[middleIndex]){
  //     rightIndex = middleIndex-1
  //     return search(arr,target,leftIndex,rightIndex)
  //   }
  //   else{
  //     leftIndex = middleIndex + 1
  //     return search(arr,target,leftIndex,rightIndex)

  //   }

  // }
  // console.log(search([1,2,3,4,5],3));
  // ---------------------------------------------------------------------------

// function second(arr) {
//   let L1
//   let L2
//   if(arr[0]>arr[1]){
//     L1 = arr[0]
//     L2 = arr[1]
//   }else{
//    L1 = arr[1]
//     L2 = arr[0]
//   }


// for(i=2;i<arr.length;i++){
//   if(arr[i]> L1 ){
//     L2= L1
//     L1=arr[i]
//   }
//   if(arr[i]<L1 && arr[i]> L2){
//     L2 = arr[i]
//   }
// }
// return L2
// }
// console.log(second([5,5,4,5,5]));
// let b=1
// function print(a){
//  if(a == 0){
//   return -1
//  }
//  console.log(b);
//  a--
//  b++
//  print(a)
// }
 

// print(10)


// function an(n){
//   if(n==0){
//     return -1
//   }
//   console.log(n);
//   n-=1
//   an(n)
// }
// an(10)

// -------------------------------------------------------------------------------
// arr=[1,2,3,4,5,6]
// // let n=0
// function display(arr,n){
// if(n>arr.length-1){
// return -1
// }
// console.log(arr[n])
// n++
// display(arr,n)
// }
// display(arr,3)
// ---------------------------------------------------------------------------------
// let arr =[[1,2],[3,4]]
// console.log(arr);
// let c = arr.map(row => 
//   row.map(element => element*2))
// console.log(c);

// let arr =[[],[]]
// for(i=0;i<arr.length;i++) {

//     arr[i].push(1,2,3)
//     // arr[i].push(2)


// }
// let c= arr.push()
// console.log(arr);

// let arr = [];
// let rows = 3;
// let columns = 3;

// let value = 1;
// // creating two-dimensional array
// for (let i = 0; i < rows; i++) {
//   arr[i] = [];
//   for (let j = 0; j < columns; j++) {
//     arr[i][j] = value++;
//   }
// }

// console.log(arr);

// let a= 5432
// let b= Array.from(String(a))
// console.log(b);
// const c = b.reduce((str,result) => Number(str)+Number(result),0)
// console.log(c);

// let a= [5,15,25]
// let b= [30,20,10]
// a=a.concat(b)
// function mergeSort(a){
//   if(a.length<2){
//     return a
//   }
//   let mid = Math.floor(a.length/2)
//   // let leftArr = a.slice(0,mid)
//   // let rightArr = a.slice(mid)
//   return merge(mergeSort(a.slice(0,mid)),mergeSort(a.slice(mid)))
// }
// function merge(leftArr,rightArr){
//   const sortedArr = []
//   while(leftArr.length && rightArr.length){
//     if(leftArr[0] <= rightArr[0]){
//       sortedArr.push(leftArr.shift())
//     }else{
//       sortedArr.push(rightArr.shift())
//     }
//   }
//   return [...sortedArr,...leftArr,...rightArr]
// }

// console.log(mergeSort(a));
// let arr = [3,2,1,4,6,5,7,9]
// let j=0
// let sum = 0
// for(let i=0;i<=arr.length+1;i++){
//   j +=i
//   if(arr[i]!==undefined){
//   sum +=arr[i]
//   }
// }

// console.log(sum);
// console.log(j);
// let missingNumber = j-sum
// console.log(missingNumber);

// let a = [3,2,1,4,6,5,7,9]
// let b = a[0]
// let sum = 0
// let maxSum=0
// for (let i = 0; i < a.length; i++) {
//   if(b<a[i]){
//     b=a[i]
//   }
//   sum +=a[i]

// }
// for (let i = 1; i <=b; i++) {
//   maxSum +=i
  
// }
// let mis = maxSum-sum
// console.log(mis);
// let a = [1,2,4,5,6,7]
// let s = 0
// for(i=0;i<a.length;i++){
//  s+=a[i]
// }
// num = (a.length*(a.length+1))/2 - s
// console.log(num);





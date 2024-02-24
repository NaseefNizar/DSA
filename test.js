function reverseString(str) {
    if (str.length <= 1) {
      return str;
    }
  
    return reverseString(str.slice(1)) + str[0];
  }
  
  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);
  console.log(reversedString);
  



// let a = setInterval(() => {
//     console.log("interval");
// },1000)

// setTimeout(() => {
//     clearInterval(a)
//     console.log("Interval stopped after 5 seconds");
// }, 5000);

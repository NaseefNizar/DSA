// function fibonacci(n){
//     const fib =[0,1]
//     for (let i = 2; i< n; i++) {
//        fib[i] = fib[i-1]+fib[i-2]      
//     }
//     return fib
// }

// console.log(fibonacci(7));

// ---------------------------------------------------------------------------------------------  

// function factorial(n){
//     if(n==1){
//     return 1
//     } 
//     return n*factorial(n-1)
// }
// console.log(factorial(5));

// ------------------------------------------------------------------------------------------

// function powerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     return (n&(n-1))===0
// }
// console.log(powerOfTwo(5));

// -------------------------------------------------------------------------

// function fibonacci(n){
//     if(n<2){
//     return n     
//     } 
//     return fibonacci(n-1) + fibonacci(n-2)
// }
// console.log(fibonacci(3));
// O(2^n) - not good

// ---------------------------------------------------------------------------
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }

    prepend(value){  
        const node = new Node(value)  
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
            // console.log(this.head);   
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
           let prev = this.head
           while(prev.next){
            prev = prev.next
           } 
           prev.next = node 
        }
        this.size++
    }
    insert(value,index){
        if(index < 0 || index > this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next   
            }
            node.next = curr.next
            curr.next = node
            this.size++
        }
    }

    insertAfterValue(value,newValue){
        const node = new Node(newValue)  
        if(this.isEmpty()){
            this.head = node
        } else {
            let curr = this.head
            while(curr){
                if(curr.value === value){
                    node.next =curr.next
                    curr.next = node
                }
                curr = curr.next
            }
        }
    }

    remove(index){
        let removenode
        if(index < 1 || index > this.size){
            return
        }else if(index === 1){
             removenode = this.head 
             this.head = this.head.next
        }else{
            let prev = this.head
            for (let i = 1; i <index-1; i++) {
               prev=prev.next;
            }
            removenode=prev.next;
            prev.next=removenode.next

        }
          this.size--
          return console.log( removenode.value)
    }

    removeValue(value){
        if(this.isEmpty()){
            return null   
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
               prev = prev.next
            }
            if(prev.next){
                const removenode = prev.next
                prev.next = removenode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value){
        console.log("sanker is old");
        if(this.isEmpty()){
            return -1
        }
        let i=0
        let curr = this.head
        while(curr){
            if(curr.value === value){                 
                    return (i)      
                }
                curr = curr.next
                i++ 
            
            }
            return -1
    }

    reverse(){
        if(this.isEmpty()){
            return null
        }
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    getMiddleElement() {
        if (!this.head) {
          return null;
        }
    
        let slow = this.head;
        let fast = this.head;
    
        while (fast && fast.next) {
          slow = slow.next;
          fast = fast.next.next;
        }
    
        return slow.value;
      }

      addArray(arr){
        for( let i=0;i<arr.length;i++){
            this.append(arr[i])
        }
      }
      duplicate(){
        if(!this.head){
            return false
        }else{
           const set = new Set() 
           set.add(this.head.value)
            let curr = this.head
           while(curr.next){
            if(set.has(curr.next.value)){
                curr.next = curr.next.next
                this.size--
            }else{
                set.add(curr.next.value)
                curr = curr.next
            }
           }
        }
      }
      
      doubly(){
        
      }
    print(){
        if(this.isEmpty()){
            console.log("empty list");
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList()
// console.log(list.isEmpty());
// console.log(list.getSize());
// list.print()
// list.append(10)
// list.print()
list.append(20)
list.append(10)
list.append(30)
list.append(40)
list.append(40)
list.append(50)
list.append(50)
list.append(60)
list.append(70)
list.append(60)
// list.append()
// list.print()
// list.append(40)
// list.print()
// list.prepend(50)
// list.print()
// list.append(60)
// list.append(80)
list.insert(15,0)
// list.print()
// // list.remove(4)
// // list.remove(5)
// list.print()
// console.log(list.removeValue(10));
// console.log(list.removeValue(60));
// list.print()
// console.log( list.search(20))
// // list.reverse()
// list.insertAfterValue(20,5)
// list.insertAfterValue(5,6)
// console.log(list.getMiddleElement())
// list.addArray([1,2,3,4,5])
// list.duplicate()
list.print()
list.duplicate()
list.print()

// console.log(list.getSize());





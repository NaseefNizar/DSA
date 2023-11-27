const LinkedList = require("./LSwithTail")

class LinkedListQueue {
    constructor(){
        this.list = new LinkedList()
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    enqueue(value){
        return this.list.append(value)
    }

    dequeue(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    print(){
        return this.list.print()
    }
}


const queue = new LinkedListQueue()
console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
console.log(queue.getSize());
queue.print()

queue.dequeue()
console.log(queue.getSize());
queue.print()

console.log(queue.peek());
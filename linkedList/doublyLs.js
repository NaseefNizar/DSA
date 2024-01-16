class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
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
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
    
    append(value){
        // console.log(value);
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            return -1
        }
        let listValues = " "
        let curr = this.head
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues);

    }


}





const list = new LinkedList()
console.log( list.isEmpty())
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
console.log(list.getSize())
list.print()

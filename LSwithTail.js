class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    print(){
        if(this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else  {
            node.next = this.head
            this.head = node
        }
        this.size ++
    }
 
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node 
        }
        this.size ++
    }

    removeFromFront() {
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    insertAfterValue(value,newValue){
        const node = new Node(newValue)  
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            let curr = this.head
            while(curr){
                if(curr.value === value){
                    if(curr != this.tail){
                    node.next =curr.next
                    curr.next = node
                    } else {
                        this.tail.next = node
                        this.tail = node
                    }
                }
                curr = curr.next
            }
        }
        this.size++
    }

    insertBeforeValue(value,newValue){
        const node = new Node(newValue)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
        if(this.head.value == value){
        node.next = this.head
        this.head = node
        }else{
            let curr=this.head;
            while(curr.next&&curr.next.value!=value){
                   curr=curr.next
            }
              node.next=curr.next
              curr.next=node
        } 
    }
    this.size++
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size == 1) {
            this.head = null
            this.tail = null 
        } else {
            let curr = this.head
            while(curr.next !== this.tail){
                curr = curr.next
            }
            curr.next = null
            this.tail = curr
        }
        this.size--
        return value
     }


     reverse(){
        if(this.isEmpty()){
            return null
        }
        let curr = this.head
        let prev = null
        this.head = this.tail
        this.tail = curr
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next  
        }
     }
}

module.exports = LinkedList

const list = new LinkedList()


list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.print()
// list.removeFromFront()
list.print()
// list.removeFromEnd()
list.insertAfterValue(3,10)
list.print()
list.insertBeforeValue(3,55)
list.print()
list.insertBeforeValue(10,55)
list.print()
list.reverse()
list.print()
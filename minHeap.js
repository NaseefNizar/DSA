class MinHeap {
    constructor() {
        this.heap = []
    }

    getParentIndex(childIndex){
        return Math.floor((childIndex-1)/2)
    }

    getLeftChildIndex(parentIndex){
        return 2 * parentIndex + 1
    }

    getRightChildIndex(parentIndex){
        return 2* parentIndex + 2
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.heap.length
    }

    leftChild(index){
        return this.heap[this.getLeftChildIndex(index)]
    }

    rightChild(index){
        return this.heap[this.getRightChildIndex(index)]
    }

    parent(index){
        return this.heap[this.getParentIndex(index)]
    }

    isLeaf(index) {
        return (
            index >= Math.floor(this.heap.length / 2) && index <= this.heap.length - 1
        )
    }

    swap(index1,index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    add(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    delete(value){
        const index = this.heap.indexOf(value)
        if(index === -1){
            return undefined
        }
        this.heap[index] = this.heap[this.heap.length-1]
        this.heap.pop()
        if (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.heapifyUp(index);
          } else {
            this.heapifyDown(index);
          }
          return value
    }

    heapifyUp(index){
       
        while(this.hasParent(index) && this.parent(index) > this.heap[index]) {
            const parentIndex = this.getParentIndex(index)
            this.swap(parentIndex,index)
            index = parentIndex
        }
    }

    heapifyDown(index){
          
        while(this.hasLeftChild(index)){
            let smallerChildIndex = this.getLeftChildIndex(index)

            if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)){
                smallerChildIndex = this.getRightChildIndex(index)
            }

            if(this.heap[index] < this.heap[smallerChildIndex]){
                break
            }
            else{
                this.swap(index,smallerChildIndex)
            }
            index = smallerChildIndex
        }
    }

    peek(){
        if(this.heap.length === 0){
            return null
        }
        return this.heap[0]
    }

    poll(){
        if(this.heap.length === 0){
            return null
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }

        const value = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return value
    }

    heapSort(){
        const sortedArr = []
        while(this.heap.length) {
            sortedArr.push(this.poll())
        }
        return sortedArr
     }


    print() {
        let i = 0;
        while (!this.isLeaf(i)) {
            console.log("PARENT:", this.heap[i]);
            console.log("LEFT CHILD:", this.leftChild(i));
            console.log("RIGHT CHILD:", this.rightChild(i));
            i++;
        }      
    }
    // print(){
    //     for(let i=0;i<this.heap.length;i++){
    //         console.log(this.heap[i]);
    //     }
    // }
}

const heap = new MinHeap()

// heap.add(5)
// heap.add(10)
// heap.add(15)
// heap.add(2)
// heap.add(45)
// heap.add(17)
// heap.add(6)
// console.log(heap.delete(2));
// heap.add(1)

// heap.print()

const numbers =[3,5,2,1,4]
for(let i=0;i<numbers.length;i++){
    heap.add(numbers[i])
}
const sortedNumbers = heap.heapSort()
console.log(sortedNumbers);
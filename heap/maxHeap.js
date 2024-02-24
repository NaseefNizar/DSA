class maxHeap {
    constructor(){
        this.heap = []
    }
    
    
    getLeftChildIndex(parentIndex){
        return 2 * parentIndex + 1
    }

    getRightChildIndex(parentIndex){
        return 2 * parentIndex + 2
    }

    getParentIndex(childIndex){
        return Math.floor((childIndex-1)/2)
    }


    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }
    
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    
    leftChild(parentIndex) {
        return this.heap[this.getLeftChildIndex(parentIndex)];
    }
    
    rightChild(parentIndex) {
        return this.heap[this.getRightChildIndex(parentIndex)];
    }
    
    parent(childIndex) {
        return this.heap[this.getParentIndex(childIndex)];
    }

    peek(){
        if(this.heap.length === 0) {
            return null
        }
        return this.heap[0]
    }

    isLeaf(index) {
        return (
            index >= Math.floor(this.heap.length / 2) && index <= this.heap.length - 1
        )
    }

    add(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    delete(value) {
        const index = this.heap.indexOf(value)
        if(index === -1){
            return undefined
        }
        if(index === this.heap.length-1){
            return value
        }
        const lastValue = this.heap.pop()
        this.heap[index] = lastValue
        if (this.hasParent(index) && this.parent(index) < this.heap[index]) {
        console.log('heapifyup');
            this.heapifyUp(index);
          } else {
        console.log('heapifydown');

            this.heapifyDown(index);
          }
        return value
    }


    heapifyUp(index) {
        let currIndex = index;
        while (this.hasParent(currIndex) && this.parent(currIndex) < this.heap[currIndex]) {
            this.swap(this.getParentIndex(currIndex), currIndex);
            currIndex = this.getParentIndex(currIndex);
        }
    }

    heapifyDown(index) {
        let currIndex = index;
        while (this.hasLeftChild(currIndex)) {
          let largerChildIndex = this.getLeftChildIndex(currIndex);
          if (this.hasRightChild(currIndex) && this.rightChild(currIndex) > this.leftChild(currIndex)) {
            largerChildIndex = this.getRightChildIndex(currIndex);
          }
    
          if (this.heap[currIndex] > this.heap[largerChildIndex]) {
            break;
          } else {
            this.swap(currIndex, largerChildIndex);
          }
          currIndex = largerChildIndex;
        }
      }

      
      peek(){
          if(this.heap.length === 0) {
              return null;
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
        
        swap(index1, index2) {
            [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
        }



    //  heapSort(){
    //     const sortedArr = []
    //     while(this.heap.length) {
    //         sortedArr.push(this.poll())
    //     }
    //     return sortedArr
    //  }

     heapSort(arr) {
        // Convert the array to a Heap
        const heap = new maxHeap();
        arr.forEach((num) => heap.add(num));
      
        for (let i = 0; i < arr.length; i++) {
          arr[i] = heap.poll();
        }
      return arr;
      }

    // print() {
    //     let i = 0;
    //     while (!this.isLeaf(i)) {
    //         console.log("PARENT:", this.heap[i]);
    //         console.log("LEFT CHILD:", this.leftChild(i));
    //         console.log("RIGHT CHILD:", this.rightChild(i));
    //         i++;
    //     }      
    // }

    print(){
        for(let i=0;i<this.heap.length;i++){
            console.log(this.heap[i]);
        }
    }
}




const heap = new maxHeap
heap.add(5)
heap.add(10)
heap.add(7)
heap.add(6)
heap.add(3)
heap.add(15)
heap.add(45)
heap.add(2)
heap.add(1)
// heap.add(45)

heap.delete(7)

heap.print()

// console.log(heap.delete(45))

// const numbers =[3,5,2,1,4]
// for(let i=0;i<numbers.length;i++){
//     heap.add(numbers[i])
// }


// const sortedNumbers = heap.heapSort([3,5,2,1,4])
// console.log(sortedNumbers);


class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a node to the end of the list
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        // If the list is empty, make the new node the head
        this.head = newNode;
        newNode.next = this.head; // Point back to the head to make it circular
      } else {
        // Traverse to the end of the list and add the new node
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head; // Point back to the head to make it circular
      }
    }
  
    // Display the elements of the circular linked list
    display() {
      if (!this.head) {
        console.log("Circular linked list is empty.");
        return;
      }
  
      let current = this.head;
      do {
        console.log(current.data);
        current = current.next;
      } while (current !== this.head);
    }
  }
  
  // Example usage:
  const circularLinkedList = new CircularLinkedList();
  circularLinkedList.append(1);
  circularLinkedList.append(2);
  circularLinkedList.append(3);
  circularLinkedList.display();
  
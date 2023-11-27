class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(value) {
      const child = new Node(value);
      this.children.push(child);
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    addRoot(value) {
      const node = new Node(value);
      this.root = node;
    }
  
    traverse(node = this.root) {
      console.log(node.value);
      for (const child of node.children) {
        this.traverse(child);
      }
    }
  }
  
  const myTree = new Tree();
  myTree.addRoot("A");
  myTree.root.addChild("B");
  myTree.root.addChild("C");
  myTree.root.children[0].addChild("D");
  myTree.root.children[0].addChild("E");
  myTree.root.children[1].addChild("F");
  
  myTree.traverse(); // output: A B D E C F
  
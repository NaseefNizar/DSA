class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) { //best and average case complexity - O(logn) & worst case - O(n) when tree is skewed into a LS
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {                           
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root = this.root, value) {                                 
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // dfs
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  
  //bfs
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  primeNumber(root) {
    let flag = 0;
    for (let i = 2; i < root.value / 2; i++) {
      if (root.value % i == 0) {
        flag = 1;
      }
    }
    if (flag === 0) {
      console.log(root.value);
    }
    if (root.left) {
      this.primenumber(root.left);
    }
    if (root.right) {
      this.primenumber(root.right);
    }
  }
}

const bst = new BinarySearchTree();
// bst.insert(12);
// bst.insert(5);
// bst.insert(3);
// bst.insert(3);
// bst.insert(7);
// bst.insert(2);
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(2);
bst.insert(7);
// console.log("Empty tree", bst.isEmpty());
// bst.delete(10)
// bst.inOrder(bst.root);
bst.levelOrder();
// bst.primeNumber(bst.root)
console.log( bst.search(1))

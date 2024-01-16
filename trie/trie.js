class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToInsert = word.charAt(i);
      let node = curr.children[charToInsert];
      if (!node) {
        node = new TrieNode();
        curr.children[charToInsert] = node;
      }
      curr = node;
    }
    curr.endOfWord = true;
  }

  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word.charAt(i);
      let node = current.children[ch];
      if (!node) {
        return false;
      }
      current = node;
    }
    return current.endOfWord;
  }

  getAllWordsWithPrefix(prefix) {
    let current = this.root;
    for (const char of prefix) {
      if (!current.children[char]) {
        return [];
      }
      current = current.children[char];
    }
    const words = [];
    this.traverse(current, prefix, words);
    return words;
  }

  traverse(node, prefix, words) {
    if (node.endOfWord) {
      words.push(prefix);
    }
    for (const char in node.children) {
      this.traverse(node.children[char], prefix + char, words);
    }
  }

  delete(word) {
    this.remove(this.root, word, 0);
  }

  remove(node, word, index) {
    if (index === word.length) {
      if (!node.endOfWord) {
        return false;
      }

      node.endOfWord = false;
      return Object.keys(node.children).length === 0;
    }

    const char = word[index];
    if (!node.children[char]) {
      return false;
    }

    const shouldDelete = this.remove(node.children[char], word, index + 1);
    if (shouldDelete) {
      delete node.children[char];
      return Object.keys(node.children).length === 0;
    }

    return false;
  }

  display(node = this.root, prefix = "") {
    if (node.endOfWord) {
      console.log(prefix);
    }
    for (let ch in node.children) {
      let childNode = node.children[ch];
      let newPrefix = prefix + ch;
      this.display(childNode, newPrefix);
    }
  }

  getAllWordsWithPrefix(prefix) {
    let current = this.root;
    for (const char of prefix) {
      if (!current.children[char]) {
        return [];
      }
      current = current.children[char];
    }
    const words = [];
    this.traverse(current, prefix, words);
    // console.log(words);
    return words;
  }

  traverse(node, prefix, words) {
    if (node.endOfWord) {
      words.push(prefix);
    }
    for (const char in node.children) {
      this.traverse(node.children[char], prefix + char, words);
    }
  }
}

const trie = new Trie();
trie.insert("n");
trie.insert("name");
trie.insert("nade");
trie.insert("no");
trie.insert("kid");
trie.delete("kid");
console.log(trie.search("kid"));

trie.display();

const words = trie.getAllWordsWithPrefix("k");
console.log(words);

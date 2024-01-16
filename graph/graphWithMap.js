class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList.has(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList.has(vertex2)) {
        this.addVertex(vertex2);
      }
      this.adjacencyList.get(vertex1).push(vertex2);
    }
  
    removeVertex(vertex) {
      if (this.adjacencyList.has(vertex)) {
        const edges = this.adjacencyList.get(vertex);
        for (const edge of edges) {
          this.removeEdge(vertex, edge);
        }
        this.adjacencyList.delete(vertex);
      }
    }
  
    removeEdge(vertex1, vertex2) {
      if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
        const edges = this.adjacencyList.get(vertex1);
        const index = edges.indexOf(vertex2);
        if (index !== -1) {
          edges.splice(index, 1);
        }
      }
    }
  
    breadthFirstSearch(start) {
      const visited = new Set();
      const queue = [start];
      const result = [];
      visited.add(start);
  
      while (queue.length > 0) {
        const current = queue.shift();
        result.push(current);
        const edges = this.adjacencyList.get(current);
        for (const edge of edges) {
          if (!visited.has(edge)) {
            visited.add(edge);
            queue.push(edge);
          }
        }
      }
  
      return result;
    }
  
    depthFirstSearch(start) {
      const visited = new Set();
      const result = [];
  
      const dfs = (vertex) => {
        visited.add(vertex);
        result.push(vertex);
  
        const edges = this.adjacencyList.get(vertex);
        for (const edge of edges) {
          if (!visited.has(edge)) {
            dfs(edge);
          }
        }
      };
  
      dfs(start);
  
      return result;
    }
  }
  
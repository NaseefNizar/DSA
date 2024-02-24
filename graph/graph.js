class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }

  findVerticesWithNoEdges() {
    const result = [];
    for (const vertex in this.adjacencyList) {
      if (this.adjacencyList[vertex].size === 0) {
        result.push(vertex);
      }
    }
    return result;
  }

  dfsRecursive(startVertex, visited = new Set()) {
    visited.add(startVertex);
    console.log(startVertex);
    for (const adjacentVertex of this.adjacencyList[startVertex]) {
      if (!visited.has(adjacentVertex)) {
        this.dfsRecursive(adjacentVertex, visited);
      }
    }
  }

  dfsIterative(startVertex) {
    const visited = new Set();
    const stack = [startVertex];
    while (stack.length !== 0) {
      const currVertex = stack.pop();
      if (!visited.has(currVertex)) {
        visited.add(currVertex);
        console.log(currVertex);
        for (const adjacentVertex of this.adjacencyList[currVertex]) {
          stack.push(adjacentVertex);
          
        }
      }
    }
  }

  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    visited.add(startVertex);
    while (queue.length !== 0) {
      const currVertex = queue.shift();
      console.log(currVertex);
      for (const adjacentVertex of this.adjacencyList[currVertex]) {
        if (!visited.has(adjacentVertex)) {
          visited.add(adjacentVertex);
          queue.push(adjacentVertex);
        }
      }
    }
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("A", "E");
graph.addEdge("B", "C");
graph.addEdge("B", "A");

// console.log(graph.hasEdge("A","B"));
// console.log(graph.hasEdge("A","C"));

// graph.dfsRecursive("E")
graph.display();
// graph.dfsIterative("E")

// graph.bfs("A");

// console.log(graph.findVerticesWithNoEdges());

// graph.bfs("E")

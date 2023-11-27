class Graph {
    constructor(numVertices) {
      this.matrix = [];
  
      // Initialize the matrix with zeros
      for (let i = 0; i < numVertices; i++) {
        this.matrix[i] = [];
        for (let j = 0; j < numVertices; j++) {
          this.matrix[i][j] = 0;
        }
      }
    }
  
    addEdge(source, destination, weight = 1) {
      this.matrix[source][destination] = weight;
    }
  
    removeEdge(source, destination) {
      this.matrix[source][destination] = 0;
    }
  
    getAdjacentVertices(vertex) {
      const adjacentVertices = [];
  
      for (let i = 0; i < this.matrix[vertex].length; i++) {
        if (this.matrix[vertex][i] !== 0) {
          adjacentVertices.push(i);
        }
      }
  
      return adjacentVertices;
    }
  
    getEdgeWeight(source, destination) {
      return this.matrix[source][destination];
    }
  
    toString() {
      let matrixString = "";
  
      for (let i = 0; i < this.matrix.length; i++) {
        matrixString += `${i}: `;
        for (let j = 0; j < this.matrix[i].length; j++) {
          matrixString += `${this.matrix[i][j]} `;
        }
        matrixString += "\n";
      }
  
      return matrixString;
    }
  }
  
  // Example usage:
  const graph = new Graph(4);
  
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 2);
  graph.addEdge(2, 0);
  graph.addEdge(2, 3);
  
  console.log(graph.toString());
  
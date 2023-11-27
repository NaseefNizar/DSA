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
      // Convert character vertices to their corresponding numeric values
      const numericSource = this._getNumericVertexValue(source);
      const numericDestination = this._getNumericVertexValue(destination);
  
      this.matrix[numericSource][numericDestination] = weight;
    }
  
    removeEdge(source, destination) {
      // Convert character vertices to their corresponding numeric values
      const numericSource = this._getNumericVertexValue(source);
      const numericDestination = this._getNumericVertexValue(destination);
  
      this.matrix[numericSource][numericDestination] = 0;
    }
  
    getAdjacentVertices(vertex) {
      const numericVertex = this._getNumericVertexValue(vertex);
      const adjacentVertices = [];
  
      for (let i = 0; i < this.matrix[numericVertex].length; i++) {
        if (this.matrix[numericVertex][i] !== 0) {
          adjacentVertices.push(this._getCharacterVertexValue(i));
        }
      }
  
      return adjacentVertices;
    }
  
    getEdgeWeight(source, destination) {
      // Convert character vertices to their corresponding numeric values
      const numericSource = this._getNumericVertexValue(source);
      const numericDestination = this._getNumericVertexValue(destination);
  
      return this.matrix[numericSource][numericDestination];
    }
  
    _getNumericVertexValue(vertex) {
      // Convert character vertex to its corresponding numeric value
      return vertex.charCodeAt(0) - 97;
    }
  
    _getCharacterVertexValue(vertex) {
      // Convert numeric vertex value to its corresponding character value
      return String.fromCharCode(vertex + 97);
    }
  
    toString() {
      let matrixString = "  ";
  
      // Add column headers
      for (let i = 0; i < this.matrix.length; i++) {
        matrixString += `${this._getCharacterVertexValue(i)} `;
      }
      matrixString += "\n";
  
      // Add row headers and matrix values
      for (let i = 0; i < this.matrix.length; i++) {
        matrixString += `${this._getCharacterVertexValue(i)} `;
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
  
  graph.addEdge('a', 'b');
  graph.addEdge('a', 'c');
  graph.addEdge('b', 'c');
  graph.addEdge('c', 'a');
  graph.addEdge('c', 'd');
  
  console.log(graph.toString());
  
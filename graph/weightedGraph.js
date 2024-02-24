class WeightedGraph {
    constructor() {
      this.graph = new Map();
    }
  
    // Add a vertex to the graph
    addVertex(vertex) {
      if (!this.graph.has(vertex)) {
        this.graph.set(vertex, new Map());
      }
    }
  
    // Add an edge between two vertices with a given weight
    addEdge(vertex1, vertex2, weight) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
  
      // Undirected graph, so we add the edge in both directions
      this.graph.get(vertex1).set(vertex2, weight);
      this.graph.get(vertex2).set(vertex1, weight);
    }
  
    // Get neighbors of a vertex along with their weights
    getNeighbors(vertex) {
      if (this.graph.has(vertex)) {
        return this.graph.get(vertex);
      }
      return null;
    }
  }
  
  // Example Usage:
  const weightedGraph = new WeightedGraph();
  
  weightedGraph.addEdge('A', 'B', 3);
  weightedGraph.addEdge('A', 'C', 2);
  weightedGraph.addEdge('B', 'C', 5);
  weightedGraph.addEdge('B', 'D', 1);
  
  console.log(weightedGraph.getNeighbors('A')); // Map { 'B' => 3, 'C' => 2 }
  console.log(weightedGraph.getNeighbors('B')); // Map { 'A' => 3, 'C' => 5, 'D' => 1 }
  
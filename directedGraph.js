var DirectedGraph = function () {
  this.vertices = {};
  this.edges = [];
};

DirectedGraph.prototype.addVertices = function (val) {
  this.vertices[val] = val;
  this.edges[val] = [];
};

DirectedGraph.prototype.addEdge = function (val1, val2) {
  if(this.vertices[val1] !== undefined && this.vertices[val1] !== undefined){
    this.edges[val1].push(val2);
  }
}



var newGraph = new DirectedGraph();
newGraph.addVertices(0);
newGraph.addVertices(1);
newGraph.addVertices(2);
newGraph.addVertices(3);
newGraph.addVertices(4);
newGraph.addVertices(5);
newGraph.addEdge(0,1)
newGraph.addEdge(0,4)
newGraph.addEdge(0,5)
newGraph.addEdge(1,4)
newGraph.addEdge(1,3)
newGraph.addEdge(2,1)
newGraph.addEdge(3,2)
newGraph.addEdge(3,4)
console.log(newGraph)
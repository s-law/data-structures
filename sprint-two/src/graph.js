

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
// O(1)
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
// O(n)
Graph.prototype.contains = function(node) {
  var temparr = Object.keys(this.nodes);
  var cont = temparr.indexOf("" + node);

  return !(cont === -1);
};

// ------------------------
// Removes a node from the graph.
// worst case O(n^2) edges
Graph.prototype.removeNode = function(node) {
  var edges = this.nodes[node];

  _.each(edges, function(edge) {
    this.removeEdge(node, edge);
  })

  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// O(1)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.nodes[fromNode].indexOf(toNode) !== -1)
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
// O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
// O((fromEdges + toEdges)n) ; Complexity depends on number of edges that both nodes each have
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.nodes[fromNode].indexOf(toNode);
  this.nodes[fromNode].splice(index, 1);
  index = this.nodes[toNode].indexOf(fromNode);
  this.nodes[toNode].splice(index, 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
// O(n)
Graph.prototype.forEachNode = function(cb) {
  for(var node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



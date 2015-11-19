var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  //storing children in array as a simple tree can be
  //just an array of arrays
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  // var index = _.flatten(this).indexOf(target);
  console.log(flatten(this));
  // return !(index != -1);
};

var flatten = function(array) {
  var result = [];

  _.each(array, function(item) {
    if(Array.isArray(item.children)) {
      flatten(item.children);
    }
    else {
      result.push(item.value);      
    }
  });

  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

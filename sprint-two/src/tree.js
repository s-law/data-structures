var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  //storing children in array as a simple tree can be
  //just an array of arrays
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

//O(1) because just push to end of array
treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};


//O(n) as we visit each child node once
treeMethods.contains = function(target) {
  
  var found = false;

  //inner recursive function to visit each node
  var recurse = function(head){
    if(head.value === target){
      found = true;
    }
    else{
      for(var i = 0; i < head.children.length; i++){
        recurse(head.children[i], target);
      }
    }
  }
  recurse(this);

  return found;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

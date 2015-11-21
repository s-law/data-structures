var Tree = function(value, parent) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.parent = parent || null;

  //storing children in array as a simple tree can be
  //just an array of arrays
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

//O(1) because just push to end of array
treeMethods.addChild = function(value) {
  var newChild = Tree(value, this);
  this.children.push(newChild);
  // console.log(this);
};

treeMethods.removeFromParent = function(value) {
  var targetTree;

  var recurse = function(head){
    if(head.value === value){
      targetTree = head;
    }
    else{
      for(var i = 0; i < head.children.length; i++){
        recurse(head.children[i], value);
      }
    }
  }

  recurse(this);

  var parent = targetTree.parent;
  var targetIndex = targetTree.parent.children.indexOf(targetTree);

  targetTree.parent = null;
  parent.children.splice(targetIndex, 1);
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

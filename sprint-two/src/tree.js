var Tree = function(value, parent) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.parent = parent || null;
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

//O(1) because just push to end of array
treeMethods.addChild = function(value) {
  var newChild = Tree(value, this);
  this.children.push(newChild);
};

//O(n)
treeMethods.traverse = function(callback) {
  var recurse = function(head){
    callback(head);
    if(head.children.length > 0){
      for(var i = 0; i < head.children.length; i++){
        recurse(head.children[i]);
      }
    }
  }
  recurse(this);
};

//O(1) on top of traverse's O(n) - thus O(n) in total
treeMethods.removeFromParent = function(value) {
  var targetTree;

  this.traverse(function(head){
    if(head.value === value){
      targetTree = head;
    }
  });

  var targetParent = targetTree.parent; //temp value required
  var targetIndex = targetParent.children.indexOf(targetTree);

  targetTree.parent = null; //deleting link to parent object
  targetParent.children.splice(targetIndex, 1); //removing entry in parent's child array
};


//O(1) on top of traverse's O(n) - thus O(n) in total
treeMethods.contains = function(value) {
  
  var found = false;

  this.traverse(function(head){
    if(head.value === value){
      found = true;
    }
  });

  return found;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

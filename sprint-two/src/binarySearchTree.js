var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var binaryTreeMethods = {};

//setup methods
binaryTreeMethods.insert = function(value) {

  var inputTree = BinarySearchTree(value);

  //O(log(n)) as we usually eliminate half the tree at a time
  var recursiveInsert = function (rootTree) {
    if(inputTree.value < rootTree.value){
      if(rootTree.left){
        recursiveInsert(rootTree.left);
      }
      else{
        rootTree.left = inputTree;
      }
    }
    else if(inputTree.value > rootTree.value){
      if(rootTree.right){
        recursiveInsert(rootTree.right);
      }
      else{
        rootTree.right = inputTree;
      }
    }
  }

  recursiveInsert(this);
};

//O(log(n)) same reason as above
binaryTreeMethods.contains = function(value) {

  var found = false;
  
  var recursiveSearch = function (rootTree){
    if(rootTree.value === value){
      found = true;
    }
    else if(rootTree.value > value && rootTree.left){
      recursiveSearch(rootTree.left);
    }
    else if(rootTree.value < value && rootTree.right){
      recursiveSearch(rootTree.right);
    }
  }

  recursiveSearch(this);

  return found;
};

//O(n) as we visit each node a constant no. of times
binaryTreeMethods.depthFirstLog = function(callback) {

  var recurseCallback = function(rootTree){
    callback(rootTree.value);
    if(rootTree.left){
      recurseCallback(rootTree.left);
    }
    if(rootTree.right){
      recurseCallback(rootTree.right);
    }
  }

  recurseCallback(this);

};

//O(n) as we visit each node a constant no. of times
binaryTreeMethods.breadthFirstLog = function() {
  var result = [];
  var subtrees = [];
  var rootTree = this;

  do{     
    // log the value of the tree
    result.push(rootTree.value);
    // if a subtree exists on the left side, push that to the subtrees array
    if(rootTree.left !== null) {
      subtrees.push(rootTree.left);
    }
    // if a subtree exists on the right side, push *that* to the subtrees array
    if(rootTree.right !== null) {
      subtrees.push(rootTree.right);
    }
    // set the first available tree in the substrees array to be the new examined tree
    rootTree = subtrees.shift();
  } while(rootTree !== undefined); // quit doing this when trying to shift() subtrees results in 'undefined' (i.e., the subtree array is empty)

  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

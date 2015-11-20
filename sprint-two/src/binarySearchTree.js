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

/*
 * Complexity: What is the time complexity of the above functions?
 */

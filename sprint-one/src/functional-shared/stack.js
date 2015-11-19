var Stack = function() {

  //storage is THIS
  var storage = {};
  storage.stackSize = 0;

  //This extend method is vital to the working of functional-shared stacks
  //unlike prototypical instantiation we must explicitly extend. 
  _.extend(storage, stackMethods);

  return storage;
};


var stackMethods = {};

stackMethods.push = function(value) {
  this[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function() {
  var item = this[this.stackSize - 1];
  delete this[this.stackSize - 1];
  this.stackSize--; 

  return item;
};

stackMethods.size = function() {
  return this.stackSize >= 0 ? this.stackSize : 0;
};



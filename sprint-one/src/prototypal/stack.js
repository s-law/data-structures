var Stack = function() {
  var storage = Object.create(stackMethods); 
  storage.stackSize = 0;

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


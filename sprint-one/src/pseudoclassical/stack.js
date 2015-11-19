var Stack = function() {
  this.stackSize = 0; 
};

Stack.prototype.push = function(value) {
  this[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function() {
  var item = this[this.stackSize - 1];
  delete this[this.stackSize - 1];
  this.stackSize--;
  return item;
};

Stack.prototype.size = function() {
  return this.stackSize >= 0 ? this.stackSize : 0;
};


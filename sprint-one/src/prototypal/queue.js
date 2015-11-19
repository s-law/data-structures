var Queue = function() {
  var storage = Object.create(queueMethods);
  storage.queueSize = 0;
  storage.lowest = 0;
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.queueSize + this.lowest] = value;
  this.queueSize++;
};

queueMethods.dequeue = function() {
  var item = this[this.lowest];

  delete this[this.lowest];
  this.lowest++;
  this.queueSize--;
  
  return item;
};

queueMethods.size = function() {
  return this.queueSize >= 0 ? this.queueSize : 0;
};
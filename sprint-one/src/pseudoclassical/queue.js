var Queue = function() {
  this.queueSize = 0;
  this.lowest = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.queueSize + this.lowest] = value;
  this.queueSize++;
};

Queue.prototype.dequeue = function() {
  var item = this[this.lowest];
  
  delete this[this.lowest];
  this.lowest++;
  this.queueSize--;

  return item;
};

Queue.prototype.size = function() {
  return this.queueSize >= 0 ? this.queueSize : 0;
};



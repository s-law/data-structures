var Queue = function() {
  var storage = {
    queueSize: 0,
    lowest: 0
  };

  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.queueSize + this.lowest] = value;
    this.queueSize++;
  },

  dequeue: function() {
    var item = this[this.lowest];

    delete this[this.lowest];
    this.lowest++;
    this.queueSize--;

    return item;
  },

  size: function() {
    return this.queueSize >= 0 ? this.queueSize : 0;
  }
};



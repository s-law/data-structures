var Queue = function() {
  var someInstance = {
    queueSize: 0,
    lowest: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.lowest + someInstance.queueSize] = value;
    someInstance.queueSize++;
  };

  someInstance.dequeue = function() {
    var item = storage[someInstance.lowest];

    delete storage[someInstance.lowest];
    someInstance.queueSize--;
    someInstance.lowest++;

    return item;
  };

  someInstance.size = function() {
    return someInstance.queueSize >= 0 ? someInstance.queueSize : 0;
  };

  return someInstance;
};

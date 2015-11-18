var Stack = function() {
  var someInstance = {
    stackSize : 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.stackSize] = value;
    someInstance.stackSize++;
  };

  someInstance.pop = function() {
    var result;

    result = storage[someInstance.stackSize - 1];
    delete storage[someInstance.stackSize - 1];
    someInstance.stackSize--;

    return result;
  };

  someInstance.size = function() {
    return someInstance.stackSize >= 0 ? someInstance.stackSize : 0;
  };

  return someInstance;
};

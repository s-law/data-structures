

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    // if (this._storage.get(index)[k] === k) {
      var obj = {};
      obj[k] = v;
      this._storage.set(index, obj);
    // }
  } else if (this._storage.get(index).hasOwnProperty(k)) {
    var obj = {};
    obj[k] = v;
    this._storage.set(index, obj);
  } else {
    do {
      index++;
      index = index % this._limit;
      console.log(index);
    } while (this._storage.get(index) !== undefined /*|| !this._storage.get(index).hasOwnProperty(k)*/);
    var obj = {};
    obj[k] = v;
    this._storage.set(index, obj);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index).hasOwnProperty(k)) {
    return this._storage.get(index)[k];  
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



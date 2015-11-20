

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//insert method requires O(1) - hashing is O(n) where n is string size
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var obj = this._storage.get(index) || {};
  obj[k] = v;
  this._storage.set(index, obj);
};

//O(1)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

//O(1)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(index);
  delete obj[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



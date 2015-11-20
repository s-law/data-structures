

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//insert method requires O(1) - hashing is O(n) where n is string size
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var arr = this._storage.get(index) || [];
  var found = find(arr, k);

  if(found !== undefined){
    arr[found][1] = v;
  }
  else{
    arr.push([k, v]);
  }

  this._storage.set(index, arr);
};

//O(1)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  var found = find(arr, k);

  if(found !== undefined){
    return arr[found][1];
  }
  return found;

};

//O(1)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var arr = this._storage.get(index);
  var found = find(arr, k);

  if(found !== undefined){
    arr.splice(found, 1);
  }
};

var find = function(arr, k){
  for(var index = 0; index < arr.length; index++){
    if(arr[index][0] === k){
      return index;
    }
  }

  return undefined;
}



/*
 * Complexity: What is the time complexity of the above functions?
 */



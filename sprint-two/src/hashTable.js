

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
  this._rehashing = false;
};

//insert method requires O(n) where n is length of sub-array due to find
//hashing is O(n) where n is string size
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var arr = this._storage.get(index) || [];
  var found = find(arr, k);

  if(found !== undefined){
    arr[found][1] = v;
  }
  else{
    arr.push([k, v]);
    this._size++;   
  }

  this._storage.set(index, arr); 

  if(this._rehashing === false){
    this.grow();
  }
};

//O(n) same reason as above
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  var found = find(arr, k);

  if(found !== undefined){
    return arr[found][1];
  }
  return found;

};

//O(n) same reason as above
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var arr = this._storage.get(index);
  var found = find(arr, k);

  if(found !== undefined){
    arr.splice(found, 1);
    this._size--;

    if (this._rehashing === false) {
      this.shrink();
    }
  }
  console.log(this._size);
  
};

HashTable.prototype.grow = function(){
  if(this._size/this._limit > 0.75){
    var flatData = [];
    this._rehashing = true;

    this._storage.each(function(bucket){
      if(bucket){
        for(var i = 0; i < bucket.length; i++){
          flatData = flatData.concat(bucket[i]);
        }
      }
    });

    this._limit*=2;
    this._storage = LimitedArray(this._limit);
    this._size = 0;

    for(var i = 0; i < flatData.length; i+=2){
      this.insert(flatData[i], flatData[i+1]);
    }
  }
    this._rehashing = false;
}


HashTable.prototype.shrink = function(){
  if(this._size/this._limit < 0.25 && this._size > 0){
    var flatData = [];
    this._rehashing = true;

    this._storage.each(function(bucket){
      if(bucket){
        for(var i = 0; i < bucket.length; i++){
          flatData = flatData.concat(bucket[i]);
        }
      }
    });

    this._limit/=2;
    this._storage = LimitedArray(this._limit);
    this._size = 0;

    for(var i = 0; i < flatData.length; i+=2){
      this.insert(flatData[i], flatData[i+1]);
    }
  console.log(this._limit);
  }
  this._rehashing = false;
}


//O(n) worst case where n is the length of the sub-array
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



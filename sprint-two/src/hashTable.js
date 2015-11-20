

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
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
  this.grow();
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
  console.log(arr);
  var found = find(arr, k);

  if(found !== undefined){
    arr.splice(found, 1);
    this._size--;
  }

  // this.shrink();
};

HashTable.prototype.grow = function(){
  if(this._size/this._limit >= 0.75){
    var flatData = [];

    this._storage.each(function(bucket, i, storage){
      flatData = flatData.concat(bucket);
    });
    console.log(flatData);

    this._limit*=2;
    this._storage = LimitedArray(this._limit);

    for(var i = 0; i < flatData.length; i++){
      this.insert(flatData[i]);
      // console.log(flatData[i]);
    }
  }
}


HashTable.prototype.shrink = function(){
  if(this._size/this._limit <= 0.25 && this._size !== 0){
    var flatData = [];

    this._storage.each(function(bucket){
      flatData.concat(bucket);
      console.log(bucket);
    });

    this._limit = this._limit/2;
    this._storage = LimitedArray(this._limit);

    for(var i = 0; i < flatData.length; i++){
      this.insert(flatData[i][0], flatData[i][1]);
    }
  }
}


//O(n) worst case where n is the length of the sub-array
var find = function(arr, k){
  if(arr !== undefined){
    return undefined;
  }

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



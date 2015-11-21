var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

//O(1)
setPrototype.add = function(item) {
  var type = getType(item);
  var key = "" + item;

  if(this._storage[type] === undefined){
    this._storage[type] = {}; 
  }

  this._storage[type][key] = item;
};

//O(1)
setPrototype.contains = function(item) {
  var type = getType(item);
  var key = "" + item;
  return this._storage[type][key] !== undefined;
};

//O(1)
setPrototype.remove = function(item) {
  var type = getType(item);
  var key = "" + item;
  delete this._storage[type][key];
};

var getType = function(item) {
  if(Array.isArray(item)){
    return "array";
  }
  else{
    return typeof item;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

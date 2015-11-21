var DoublyLinkedList = function() {

  //only reason we need obj here is to hold head & tail
  var list = {};
  list.head = null;
  list.tail = null;

  //O(1) constant time ( + a tiny bit of overhead to reassign tail)
  list.addToTail = function(value) {
    var newNode = Node(value);

    //basically stores all data via head node
    if (list.head === null) {
      list.head = newNode;
    }
    //reassigns tail without losing data
    if (list.tail !== null) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  //O(1) constant time
  list.removeHead = function() {
    var item = list.head.value;
    list.head = list.head.next;

    return item;
  };

  //O(n) worst case. On average O(n/2) but this reduces to O(n) again
  list.contains = function(target) {
    var tracker = list.head;

    do {
      if (tracker.value === target)
        return true;
      tracker = tracker.next;
    } while (tracker !== null);

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

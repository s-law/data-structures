var DoublyLinkedList = function() {

  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var newNode = Node(value);

    if (list.tail === null) {
      list.tail = newNode;
    }

    if (list.head !== null) {
      newNode.next = list.head;
      list.head.previous = newNode;
    }

    list.head = newNode;
  };

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
    }

    if (list.tail !== null) {
      list.tail.next = newNode;
      newNode.previous = list.tail;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var item = list.head.value;
    list.head = list.head.next;

    return item;
  };

  list.removeTail = function() {
    var item = list.tail.value;
    list.tail = list.tail.previous;

    return item;
  };

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
  node.previous = null;

  return node;
};

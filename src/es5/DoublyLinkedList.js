function Node(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.append = function (element) {
  var newNode = new Node(element);
  if (this.length === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length += 1;
}

DoublyLinkedList.prototype.insert = function (position, element) {
  if (position < 0 || position > this.length) {
    return false;
  }
  var newNode = new Node(element);
  // 如果原本的链表中一个节点都没有
  if (this.length === 0 && position === 0) {
    this.length += 1;

    this.head = newNode;
    this.tail = newNode;
    return true;
  }

  if (position === 0) {
    // 先思考插入节点的 prev 和 next
    newNode.prev = null;
    newNode.next = this.head;
    // 再思考剩余部分的 prev 和 next
    this.head.prev = newNode;
    // 最后思考头尾指针
    this.head = newNode;
  } else if (position === this.length) {
    // 先思考 newNode 的 prev
    newNode.prev = this.tail;
    // 再思考 tail 的 next
    this.tail.next = newNode;
    this.tail = newNode;
  } else {
    var previous = this.head;
    for (var i = 0; i < position - 1; i++) {
      previous = previous.next;
    }
    // 先思考插入节点的 prev
    newNode.prev = previous;
    newNode.next = previous.next;
    // 再思考 previous.next 的 prev
    previous.next.prev = newNode;
    // 以及 previous 的 next
    previous.next = newNode;
  }
  this.length += 1;
  return true;
}

DoublyLinkedList.prototype.get = function (position) {
  if (position < 0 || position > this.length - 1) {
    return null;
  }
  var current = this.head;
  for (var i = 0; i < position; i++) {
    current = current.next;
  }
  return current.data;
}

DoublyLinkedList.prototype.indexOf = function (element) {
  var current = this.head;
  for (var index = 0; index < this.length; index++) {
    if (current.data === element) {
      return index;
    }
    current = current.next;
  }
  return -1;
}

DoublyLinkedList.prototype.removeAt = function (position) {
  if (position < 0 || position > this.length - 1) {
    return null;
  }

  var element = null;
  if (this.length === 1 && position === 0) { 
    element = this.head.data;
    this.length -= 1;

    this.head = null;
    this.tail = null;
    return element;
  }
  
  if (position === 0) {
    element = this.head.data;

    var newHead = this.head.next;
    // newHead 的 prev
    newHead.prev = null;
    // 再思考 head 的 next
    this.head.next = null;
    this.head = newHead;
  } else if (position === this.length - 1) {
    element = this.tail.data;
    
    var newTail = this.tail.prev;
    // 先思考 tail 的 prev
    this.tail.prev = null;
    // 再思考 newTail 的 next
    newTail.next = null;
    this.tail = newTail;
  } else {
    var previous = this.head;
    for (var i = 0; i < position - 1; i++) {
      previous = previous.next;
    }
    var current = previous.next;
    element = current.data;
    // 先思考 current.next 的 prev
    current.next.prev = previous;
    // 再思考 previous 的 next
    previous.next = current.next;
    // 然后是 current 取消自己的指针
    current.prev = null;
    current.next = null;
  }
  this.length -= 1;
  return element;
}

DoublyLinkedList.prototype.remove = function (element) {
  var index = -1; // index 是要返回的 element 的下标值

  if (this.length === 1 && this.head.data === element) { 
    index = 0;
    this.length -= 1;
    this.head = null;
    this.tail = null;
    return index;
  }

  if (this.head.data === element) {
    // 如果位于首部
    index = 0;
    this.length -= 1;

    var newHead = this.head.next;
    // 先思考 newHead 的 prev
    newHead.prev = null;
    // 再思考 head 的 next
    this.head.next = null;
    this.head = newHead;
  } else if (this.tail.data === element) {
    // 如果位于尾部
    index = this.length - 1;
    this.length -= 1;

    var newTail = this.tail.prev;
    // 先思考 tail 的 prev
    this.tail.prev = null;
    // 再思考 newTail 的 next
    newTail.next = null;
    this.tail = newTail;
  } else {
    var previous = this.head;
    var current = previous.next;
    for (var i = 1; i < this.length; i++) {
      if (current.data === element) {
        index = i;
        this.length -= 1;

        // 先修改 current.next 的 prev
        current.next.prev = previous;
        // 再修改 previous 的 next
        previous.next = current.next;
        // 然后将 current 的 prev 和 next 都置为 null
        current.prev = null;
        current.next = null;
        break;
      }
      previous = previous.next;
      current = current.next;
    }
  }
  return index;
}

DoublyLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
}

DoublyLinkedList.prototype.size = function () {
  return this.length;
}

DoublyLinkedList.prototype.toString = function () {
  return this.backwardString(); 
}

DoublyLinkedList.prototype.backwardString = function () {
  var arr = [];
  var current = this.head;
  while (current !== null) {
    arr.push(current.data);
    current = current.next;
  }
  return "[" + arr.join(", ") + "]";
}

DoublyLinkedList.prototype.forwardString = function () {
  var arr = [];
  var current = this.tail;
  while (current !== null) {
    arr.push(current.data);
    current = current.prev;
  }
  return "[" + arr.join(", ") + "]";
}

module.exports = {
  DoublyLinkedList
};


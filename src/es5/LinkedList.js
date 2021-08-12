function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

// 给链表的最后位置增加一个节点
LinkedList.prototype.append = function (data) {
  var newNode = new Node(data);
  if (this.length === 0) {
    // 如果链表为空, 直接追加
    this.head = newNode;
  } else {
    // 如果链表不为空, 找到最后的位置再追加
    var current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.length += 1;
}

// 在链表的特定位置插入节点
// 链表的位置从 0 开始计数
// 插入是指到 postion 之前
// 所以 insert(0, data) 是指新建一个节点当作头
LinkedList.prototype.insert = function (position, data) {
  // 边界判断
  if (position < 0 || position > this.length) {
    return false;
  }

  var newNode = new Node(data);
  if (position === 0) {
    // 如果在头节点进行插入
    newNode.next = this.head;
    this.head = newNode;
  } else {
    var previous = this.head;
    for (var i = 0; i < position - 1; i++) {
      previous = previous.next;
    }
    newNode.next = previous.next;
    previous.next = newNode;
  }
  this.length += 1;
  return true;
}

LinkedList.prototype.toString = function () {
  var arr = [];
  var current = this.head;
  while (current.next !== null) {
    arr.push(current.data);
    current = current.next;
  }
  arr.push(current.data);
  return "[" + arr.join(", ") + "]";
}

module.exports = {
  LinkedList
};

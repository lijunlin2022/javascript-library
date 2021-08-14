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
    // 先思考 newNode 的 next
    newNode.next = this.head;
    this.head = newNode;
  } else {
    var previous = this.head;
    for (var i = 0; i < position - 1; i++) {
      previous = previous.next;
    }
    var current = previous.next;
    // 先思考 newNode 的 next
    newNode.next = current;
    // 再思考 previous 的 next
    previous.next = newNode;
  }
  this.length += 1;
  return true;
}

// get 方法, 获得第 position 个 Node 的 data
LinkedList.prototype.get = function (position) {
  // 越界判断, 和 insert 不同, get 的 postion 不能为 this.length
  if (position < 0 || position > this.length - 1) {
    return null;
  }

  var current = this.head;
  for (var i = 0; i < position; i++) {
    current = current.next;
  }
  return current.data;
}

// indexOf(element) 方法, 获取 data 的值为 element 的索引
LinkedList.prototype.indexOf = function (element) {
  var current = this.head;
  for (var index = 0; index < this.length; index++) {
    if (current.data === element) {
      return index;
    } else {
      current = current.next;
    }
  }
  return -1;
}

// update 方法, 更新 position 位置的 data
LinkedList.prototype.update = function (position, element) {
  if (position < 0 || position > this.length - 1) {
    return false;
  }
  var current = this.head;
  for (var i = 0; i < position; i++) {
    current = current.next;
  }
  current.data = element;
  return true;
}

LinkedList.prototype.removeAt = function (position) {
  if (position < 0 || position > this.length - 1) {
    return null;
  }
  var ret = null;
  // 需要注意, 删除头节点和其他节点是不一样的
  if (position === 0) {
    ret = this.head.data;
    this.head = this.head.next;
  } else {
    var previous = this.head;
    for (var i = 0; i < position - 1; i++) {
      previous = previous.next;
    }
    var current = previous.next;
    ret = current.data;
    previous.next = current.next;
  }
  this.length -= 1;
  return ret;
}

LinkedList.prototype.remove = function (element) {
  var index = -1;
  if (this.head.data === element) {
    index = 0;
    this.head = this.head.next;
  } else {
    // 删除节点需要知道 previous 和 current 的位置,
    // 直接从 index = 1 的位置开始
    var previous = this.head;
    var current = previous.next;
    for (var i = 1; i < this.length; i++) {
      if (current.data === element) {
        index = i;
        previous.next = current.next;
        break;
      }
      previous = previous.next;
      current = current.next;
    }
  }
  this.length -= 1;
  return index;
}

LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
}

LinkedList.prototype.size = function () {
  return this.length;
}

LinkedList.prototype.toString = function () {
  var arr = [];
  var current = this.head;
  while (current !== null) {
    arr.push(current.data);
    current = current.next;
  }
  return "[" + arr.join(", ") + "]";
}

module.exports = {
  LinkedList
};

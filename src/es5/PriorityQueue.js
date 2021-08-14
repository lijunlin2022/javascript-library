function QueueElement(element, priority) {
  this.element = element;
  this.priority = priority;
}

QueueElement.prototype.toString = function () {
  return this.element + "-" + this.priority;
}

function PriorityQueue() {
  this.items = [];
}

PriorityQueue.prototype.size = function () {
  return this.items.length;
}

PriorityQueue.prototype.isEmpty = function () {
  return this.items.length === 0;
}

// priority 越小, 代表优先级越高, 参照军队一等功, 二等功, 三等功
PriorityQueue.prototype.enqueue = function (element, priority) {
  var queEle = new QueueElement(element, priority);
  if (this.items.length === 0) {
    this.items.push(queEle);
  } else {
    var isAdded = false;
    for (var i = 0; i < this.items.length; i++) {
      if (queEle.priority < this.items[i].priority) {
        this.items.splice(i, 0, queEle);
        isAdded = true;
        break;
      }
    }
    if (isAdded === false) {
      this.items.push(queEle);
    }
  }
}

PriorityQueue.prototype.dequeue = function () {
  return this.items.shift();
}

PriorityQueue.prototype.front = function () {
  return this.items[0];
}

PriorityQueue.prototype.back = function () {
  return this.items[this.items.length - 1];
}

PriorityQueue.prototype.toString = function () {
  var arr = [];
  for (var i = 0; i < this.items.length; i++) {
    var item = this.items[i].element + "-" + this.items[i].priority;
    arr.push(item);
  }
  return "[" + arr.join(", ") + "]";
}

module.exports = {
  PriorityQueue
};

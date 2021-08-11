function Queue() {
  this.items = [];
}

Queue.prototype.enqueue = function (item) {
  this.items.push(item);
}

Queue.prototype.dequeue = function () {
  return this.items.shift();
}

Queue.prototype.front = function () {
  return this.items[0];
}

Queue.prototype.back = function () {
  return this.items[this.items.length - 1];
}

Queue.prototype.size = function () {
  return this.items.length;
}

Queue.prototype.isEmpty = function () {
  return this.items.length === 0;
}

Queue.prototype.toString = function () {
  return "[" + this.items.join(", ") + "]";
}

module.exports = {
  Queue
};

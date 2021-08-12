class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  toString() {
    return this.element + "-" + this.priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, priority) {
    const queEle = new QueueElement(element, priority);
    if (this.items.length === 0) {
      this.items.push(queEle);
    } else {
      let isAdded = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queEle.priority < this.items[i].priority) {
          isAdded = true;
          this.items.splice(i, 0, queEle);
          break;
        }
      }
      if (isAdded === false) {
        this.items.push(queEle);
      }
    }
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  back() {
    return this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  toString() {
    const arr = [];
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i].element + "-" + this.items[i].priority;
      arr.push(item);
    }
    return "[" + arr.join(", ") + "]";
  }
}

module.exports = {
  PriorityQueue
};

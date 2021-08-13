class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length += 1;
  }

  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false;
    }
    // 如果插入到头部
    const newNode = new Node(element);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let previous = this.head;
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }
      newNode.next = previous.next;
      previous.next = newNode;
    }
    this.length += 1;
    return true;
  }
  
  get(position) {
    if (position < 0 || position > this.length - 1) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }
    return current.data;
  }

  indexOf(element) {
    let current = this.head;
    for (let index = 0; index < this.length; index++) {
      if (element === current.data) {
        return index;
      }
      current = current.next;
    }
    return -1;
  }

  update(position, element) {
    if (position < 0 || position > this.length - 1) {
      return false;
    }
    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }
    current.data = element;
    return true;
  }

  removeAt(position) {
    if (position < 0 || position > this.length - 1) {
      return null;
    }
    let element = null;
    if (position === 0) {
      element = this.head.data;
      this.head = this.head.next;
    } else {
      let previous = this.head;
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }
      element = previous.next.data;
      previous.next = previous.next.next;
    }
    this.length -= 1;
    return element;
  }

  remove(element) {
    if (this.head.data === element) {
      this.head = this.head.next;
      this.length -= 1;
      return 0;
    }
    let previous = this.head;
    let current = previous.next;
    for (let index = 1; index < this.length; index++) {
      if (current.data === element) {
        previous.next = current.next;
        this.length -= 1;
        return index;
      }
      previous = previous.next;
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
  
  toString() {
    const arr = [];
    let current = this.head;
    while (current.next != null) {
      arr.push(current.data);
      current = current.next;
    }
    arr.push(current.data);
    return "[" + arr.join(", ") + "]";
  }
}

module.exports = {
  LinkedList
};

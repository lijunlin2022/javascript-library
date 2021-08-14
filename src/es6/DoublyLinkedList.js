class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(element) {
    const newNode = new Node(element);
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
  backwardString() {
    const arr = [];
    let current = this.head;
    while (current != null) {
      arr.push(current.data);
      current = current.next;
    }
    return "[" + arr.join(", ") + "]";
  }
  toString() {
    return this.backwardString();
  }
  forwardString() {
    const arr = [];
    let current = this.tail;
    while (current != null) {
      arr.push(current.data);
      current = current.prev;
    }
    return "[" + arr.join(", ") + "]";
  }
  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false;
    }
    const newNode = new Node(element);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (position === 0) {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      } else if (position === this.length) {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let previous = this.head;
        for (let i = 0; i < position - 1; i++) {
          previous = previous.next;
        }
        let current = previous.next;
        newNode.prev = previous;
        newNode.next = current;
        current.prev = newNode;
        previous.next = newNode;
      }
    }
    this.length += 1;
    return true;
  }

  get(position) {
    if (position < 0 || position > this.length - 1) {
      return null;
    }
    let current = null;
    if (position < Math.floor(this.length)) {
      current = this.head;
      for (let i = 0; i < position; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = 0; i < this.length - 1 - position; i++) {
        current = current.prev;
      }
    }
    return current.data;
  }

  indexOf(element) {
    let index = -1;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current.data === element) {
        index = i;
        break;
      }
      current = current.next;
    }
    return index;
  }

  update(position, element) {
    if (position < 0 || position > this.length - 1) {
      return false;
    }
    let current = null;
    if (position < Math.floor(this.length)) {
      current = this.head;
      for (let i = 0; i < position; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = 0; i < this.length - 1 - position; i++) {
        current = current.prev;
      }
    }
    current.data = element;
    return true;
  }

  removeAt(position) {
    if (position < 0 || position > this.length - 1) {
      return null;
    }
    let element = null;
    if (this.length === 1) {
      element = this.head.data;

      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) {
        element = this.head.data;

        const newHead = this.head.next;
        newHead.prev = null;
        this.head.next = null;
        this.head = newHead;
      } else if (position === this.length - 1) {
        element = this.tail.data;

        const newTail = this.tail.prev;
        newTail.next = null;
        this.tail.prev = null;
        this.tail = newTail;
      } else {
        let previous = this.head;
        for (let i = 0; i < position - 1; i++) {
          previous = previous.next;
        }
        let current = previous.next;

        element = current.data;

        current.next.prev = previous;
        previous.next = current.next;
        current.prev = null;
        current.next = null;
      }
    }
    this.length -= 1;
    return element;
  }

  remove(element) {
    let index = -1;
    if (this.length === 1 && this.head.data === element) {
      index = 0;
      this.head = null;
      this.tail = null;
    } else {
      if (this.head.data === element) {
        index = 0;

        const newHead = this.head.next;
        newHead.prev = null;
        this.head.next = null;
        this.head = newHead;
      } else if (this.tail.data === element) {
        index = this.length - 1;

        const newTail = this.tail.prev;
        newTail.next = null;
        this.tail.prev = null;
        this.tail = newTail;
      } else {
        let previous = this.head;
        let current = previous.next;
        for (let i = 1; i < this.length - 1; i++) {
          if (current.data === element) {
            index = i;

            current.next.prev = previous;
            previous.next = current.next;
            current.prev = null;
            current.next = null;
          }
        }
      }
    }
    this.length -= 1;
    return index;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}

module.exports = {
  DoublyLinkedList
};

function ArrayList() {
  this.items = [];
}

ArrayList.prototype.append = function (item) {
  this.items.push(item);
}

ArrayList.prototype.toString = function () {
  return "[" + this.items.join(", ") + "]";
}

ArrayList.prototype.swap = function (m, n) {
  var tmp = this.items[m];
  this.items[m] = this.items[n];
  this.items[n] = tmp;
}

ArrayList.prototype.bubbleSort = function () {
  var len = this.items.length;
  for (var j = len - 1; j >= 0; j--) {
    for (var i = 0; i < j; i++) {
      if (this.items[i] > this.items[i + 1]) {
        this.swap(i, i + 1);
      }
    }
  }
}

ArrayList.prototype.selectionSort = function () {
  var len = this.items.length;
  //记录最小值的下标
  for (j = 0; j < len - 1; j++) {
    var minIndex = j;
    for (var i = minIndex + 1; i < len; i++) {
      if (this.items[minIndex] > this.items[i]) {
        minIndex = i;
      }
    }
    this.swap(minIndex, j);
  }
}

ArrayList.prototype.insertionSort = function () {
  var len = this.items.length;
  for (var i = 1; i < len; i++) {
    var tmp = this.items[i];
    var j = i;
    while (tmp < this.items[j - 1] && j > 0) {
      this.items[j] = this.items[j - 1];
      j--;
    }
    this.items[j] = tmp;
  }
}

module.exports = {
  ArrayList
};

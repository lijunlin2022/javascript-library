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

ArrayList.prototype.shellSort = function () {
  var len = this.items.length;
  var gap = Math.floor(len / 2); // 希尔排序的增量
  while (gap >= 1) {
    for (i = gap; i < len; i++) {
      var tmp = this.items[i];
      var j = i;
      while (tmp < this.items[j - gap] && j > gap - 1) {
        this.items[j] = this.items[j - gap];
        j -= gap;
      }
      this.items[j] = tmp;
    }
    gap = Math.floor(gap / 2);
  }
}

// 获取快速排序的枢纽 —— 左中右三个数的中位数

ArrayList.prototype.getPivot = function (left, right) {
  var mid = Math.floor((left + right) / 2);
  if (this.items[left] > this.items[mid]) {
    this.swap(left, mid);
  }
  if (this.items[left] > this.items[right]) {
    this.swap(left, right);
  }
  if (this.items[mid] > this.items[right]) {
    this.swap(mid, right);
  }
  // 将中位数放到 right - 1 的位置
  this.swap(mid, right - 1);
  return this.items[right - 1];
}

ArrayList.prototype.quickSort = function () {
  this.quick(0, this.items.length - 1);
}

ArrayList.prototype.quick = function (left, right) {
  // 递归函数结束条件
  if (left >= right) { return; }

  var pivot = this.getPivot(left, right);

  var i = left;
  var j = right - 1; // 当前枢纽的位置

  while (i < j) {
    while (this.items[++i] < pivot) {}
    while (this.items[--j] > pivot) {}
    if (i < j) {
      this.swap(i, j);
    }
  }

  this.swap(i, right - 1); // 将枢纽放回正确的位置

  this.quick(left, i - 1);
  this.quick(i + 1, right);
}

module.exports = {
  ArrayList
};

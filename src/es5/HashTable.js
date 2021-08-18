function HashTable() {
  this.storage = [];  // 哈希表中的大数组
  this.count = 0; // 哈希表中已经保存的元素, 方便计算 loadFactor
  this.limit = 7; // 哈希表的容量
}

/**
 * 哈希函数, 生成 index
 * @param {String} str 
 * @param {Number} size 
 * @returns {Number}
 */
HashTable.prototype.hashFun = function (str, size) {
  var hashCode = 0;
  var primeNum = 37; // 37 是一个用于求 hashCode 的质数
  // 霍纳算法, 求 hashCode 的值
  for (var i = 0; i < str.length; i++) {
    hashCode = primeNum * hashCode + str.charCodeAt(i); 
  }
  var index = hashCode % size;
  return index;
}

HashTable.prototype.set = function (key, value) {
  // 1. 根据 key 获取 index
  var index = this.hashFun(key, this.limit);
  // 2. 根据 index 获取 bucket
  var bucket = this.storage[index];
  // 如果 bucket 不存在, 则创建 bucket
  if (bucket == null) {
    bucket = [];
    this.storage[index] = bucket;
  }
  // 3. 判断是否修改数据
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      tuple[1] = value;
      return;
    }
  }
  // 4. 如果不是修改数据, 则新增数据
  bucket.push([key, value]);
  this.count += 1;

  // 判断是否需要扩容
  if (this.count > this.limit * 0.75) {
    var primeNum = this.getPrimeNum(this.limit * 2);
    this.resize(primeNum);
  }
}

HashTable.prototype.get = function (key) {
  var index = this.hashFun(key, this.limit);
  var bucket = this.storage[index];

  if (bucket == null) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      return tuple[1];
    }
  }

  return null;
}

HashTable.prototype.remove = function (key) {
  var index = this.hashFun(key, this.limit);
  var bucket = this.storage[index];
  if (bucket == null) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      bucket.splice(i, 1);
      this.count -= 1;

      if (this.limit > 7 && this.count < this.limit * 0.25) {
        var primeNum = this.getPrimeNum(Math.floor(this.limit / 2));
        this.resize(primeNum);
      }

      return tuple[1];
    }
  }
  return null;
}

HashTable.prototype.isEmpty = function () {
  return this.count === 0;
}

HashTable.prototype.size = function () {
  return this.count;
}

HashTable.prototype.resize = function (newLimit) {
  var oldStorage = this.storage;

  // 重置所有的属性
  this.storage = [];
  this.count = 0;
  this.limit = newLimit;

  for (var i = 0; i < oldStorage.length; i++) {
    var bucket = oldStorage[i];

    if (bucket == null) {
      continue;
    }

    for (var j = 0; j < bucket.length; j++) {
      var tuple = bucket[j];
      this.set(tuple[0], tuple[1]);
    }
  }
}

HashTable.prototype.isPrimeNum = function (num) {
  var tmp = parseInt(Math.sqrt(num));
  for (var i = 2; i <= tmp; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

HashTable.prototype.getPrimeNum = function (num) {
  while (!this.isPrimeNum(num)) {
    num += 1;
  }
  return num;
}

HashTable.prototype.toString = function () {
  var sArr = [];
  for (var i = 0; i < this.limit; i++) {
    var bucket = this.storage[i];
    if (bucket == null) {
      sArr.push("[]");
    } else {
      var bArr = [];
      for (var j = 0; j < bucket.length; j++) {
        var tuple = bucket[j];
        if (tuple == null) {
          bArr.push("[]");
        } else {
          bArr.push(
            "[" +
            JSON.stringify(tuple[0]) +
            ", " +
            JSON.stringify(tuple[1]) +
            "]"
          );
        }
      }
      sArr.push("[" + bArr.join(", ") + "]");
    }
  }
  return "[" + sArr.join(", ") + "]";
}

module.exports = {
  HashTable
};

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

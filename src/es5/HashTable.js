/**
 * 哈希函数, 生成 index
 * @param {String} str 
 * @param {Number} size 
 * @returns {Number}
 */
function hashFun(str, size) {
  var hashCode = 0;
  var primeNum = 37; // 37 是一个用于求 hashCode 的质数
  // 霍纳算法, 求 hashCode 的值
  for (var i = 0; i < str.length; i++) {
    hashCode = primeNum * hashCode + str.charCodeAt(i); 
  }
  var index = hashCode % size;
  return index;
}

function HashTable {
  this.storage = [];  // 哈希表中的大数组
  this.count = 0; // 哈希表中已经保存的元素, 方便计算 loadFactor
  this.limit = 7; // 哈希表的容量
}

module.exports = {
  hashFun
};

function Stack() {
  this.items = [];
  
  // 入栈
  Stack.prototype.push = function(element) {
    this.items.push(element);
  }

  // 出栈
  Stack.prototype.pop = function() {
    this.items.pop();
  }

  // 获取栈顶元素
  Stack.prototype.peek = function() {
    return this.items[this.items.length - 1];
  }

  // 判空
  Stack.prototype.isEmpty = function() {
    return this.items.length == 0;
  }

  // 栈的深度
  Stack.prototype.size = function() {
    return this.items.length;
  }

  // 转字符串
  Stack.prototype.toString = function() {
    var res = "[";
    for (var i = 0; i < this.items.length - 1; i++) {
      res += this.items[i];
      res += ", ";
    }
    res += this.items[this.items.length - 1];
    res += "]";
    return res;
  }
}

export {
  Stack
}
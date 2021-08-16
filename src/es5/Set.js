function Set() {
  this.items = {};
}

Set.prototype.add = function (value) {
  if (this.items.hasOwnProperty(value)) {
    return false;
  }
  this.items[value] = value;
  return true;
}

Set.prototype.remove = function (value) {
  if (!this.items.hasOwnProperty(value)) {
    return false;
  }
  delete(this.items[value]);
  return true;
}

Set.prototype.has = function (value) {
  return this.items.hasOwnProperty(value);
}

Set.prototype.clear = function () {
  this.items = {};
}

Set.prototype.size = function () {
  return Object.keys(this.items).length;
}

Set.prototype.values = function () {
  return Object.keys(this.items);
}

Set.prototype.toString = function () {
  return "{" + Object.keys(this.items).join(", ") + "}";
}

// 集合间的操作

Set.prototype.union = function (otherSet) {
  var uninonSet = new Set();
  var values = this.values();
  for (var i = 0; i < values.length; i++) {
    uninonSet.add(values[i]);
  }
  var otherValues = otherSet.values();
  for (var j = 0; j < otherValues.length; j++) {
    uninonSet.add(otherValues[j]);
  }
  return uninonSet;
}

Set.prototype.intersection = function (otherSet) {
  var intersectionSet = new Set();
  var values = this.values();
  for (var i = 0; i < values.length; i++) {
    var element = values[i];
    if (otherSet.has(element)) {
      intersectionSet.add(element);
    }
  }
  return intersectionSet;
}

Set.prototype.difference = function (otherSet) {
  var differenceSet = new Set();
  var values = this.values();
  for (var i = 0; i < values.length; i++) {
    var element = values[i];
    if (!otherSet.has(element)) {
      differenceSet.add(element);
    }
  }
  return differenceSet;
}

Set.prototype.isSubset = function (otherSet) {
  if (this.size() > otherSet.size()) {
    return false;
  }
  var values = this.values();
  for (var i = 0; i < values.length; i++) {
    var element = values[i];
    if (!otherSet.has(element)) {
      return false;
    }
  }
  return true;
}

module.exports = {
  Set
};

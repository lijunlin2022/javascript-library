function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

// BinarySearchTree.prototype.insert = function (key) {
//   var newNode = new Node(key);
//   if (this.root == null) {
//     this.root = newNode;
//   } else {
//     var p = this.root;
//     while (p) {
//       if (key < p.key) {
//         p = p.left;
//       } else {
//         p = p.right;
//       }
//     }
//     p = newNode;
//   }
// }

BinarySearchTree.prototype.insert = function (key) {
  var newNode = new Node(key);
  if (this.root == null) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
}

BinarySearchTree.prototype.insertNode = function (node, newNode) {
  if (newNode.key < node.key) { // 向左插入
    if (node.left == null) {
      node.left = newNode;
    } else {
      this.insertNode(node.left, newNode);
    }
  } else { // 向右插入
    if (node.right == null) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }
}

BinarySearchTree.prototype.preorderTraversal = function (handler) {
  this.preorderTraversalNode(this.root, handler);
}

BinarySearchTree.prototype.preorderTraversalNode = function (node, handler) {
  if (node != null) {
    handler(node.key);
    this.preorderTraversalNode(node.left, handler);
    this.preorderTraversalNode(node.right, handler);
  }
}

BinarySearchTree.prototype.preorderTraversalToString = function () {
  var arr = [];
  this.preorderTraversal(function (key) {
    arr.push(key);
  });
  return "[" + arr.join(", ") + "]";
}

module.exports = {
  BinarySearchTree
};

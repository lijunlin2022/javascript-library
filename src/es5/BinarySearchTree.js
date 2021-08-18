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

BinarySearchTree.prototype.inorderTraversal = function (handler) {
  this.inorderTraversalNode(this.root, handler);
}

BinarySearchTree.prototype.inorderTraversalNode = function (node, handler) {
  if (node != null) {
    this.inorderTraversalNode(node.left, handler);
    handler(node.key);
    this.inorderTraversalNode(node.right, handler);
  }
}

BinarySearchTree.prototype.inorderTraversalToString = function (node, handler) {
  var arr = [];
  this.inorderTraversal(function (key) {
    arr.push(key);
  });
  return "[" + arr.join(", ") + "]";
}

BinarySearchTree.prototype.postorderTraversal = function (handler) {
  this.postorderTraversalNode(this.root, handler);
}

BinarySearchTree.prototype.postorderTraversalNode = function (node, handler) {
  if (node != null) {
    this.postorderTraversalNode(node.left, handler);
    this.postorderTraversalNode(node.right, handler);
    handler(node.key);
  }
}

BinarySearchTree.prototype.postorderTraversalToString = function () {
  var arr = [];
  this.postorderTraversal(function (key) {
    arr.push(key);
  });
  return "[" + arr.join(", ") + "]";
}

BinarySearchTree.prototype.max = function () {
  var node = this.root;
  
  if (node == null) {
    return null;
  }

  while (node.right != null) {
    node = node.right;
  }

  return node.key;
}

BinarySearchTree.prototype.min = function () {
  var node = this.root;

  if (node == null) {
    return null;
  }

  while (node.left != null) {
    node = node.left;
  }

  return node.key;
}

BinarySearchTree.prototype.search = function (key) {
  var node = this.root;
  while (node != null) {
    if (key < node.key) {
      node = node.left;
    } else if (key > node.key) {
      node = node.right;
    } else {
      return true;
    }
  }
  return false;
}

BinarySearchTree.prototype.remove = function (key) {
  if (this.root == null) {
    return false;
  }

  var current = this.root;
  var parent = null;
  var isLeftChild = true;

  // 查找节点
  while (key != current.key) {
    parent = current;
    if (key < current.key) {
      isLeftChild = true;
      current = current.left;
    } else {
      isLeftChild = false;
      current = current.right;
    }

    // 如果没找到节点
    if (current == null) {
      return false;
    }
  }

  // 找到了节点
  // 如果节点是叶子节点
  if (current.left == null && current.right == null) {
    // 如果节点是叶子节点也是根节点
    if (current === this.root) {
      this.root = null;
    } else if (isLeftChild) {
      parent.left = null;
    } else {
      parent.right = null;
    }
  }
  else if (current.right == null) { // 如果节点只有一个左子节点
    if (current === this.root) {
      this.root = current.left;
    } else if (isLeftChild) {
      parent.left = current.left;
    } else {
      parent.right = current.left;
    }
  }
  else if (current.left == null) { // 如果节点只有一个右子节点
    if (current === this.root) {
      this.root = current.right;
    } else if (isLeftChild) {
      parent.left = current.right;
    } else {
      parent.right = current.right;
    }
  }
  else { // 如果节点有两个子节点
    var successor = this.getSuccessor(current);

    if (current === this.root) {
      this.root = successor;
    } else if (isLeftChild) {
      parent.left = successor;
    } else {
      parent.right = successor;
    }

    successor.left = current.left;
  }

  return true;
}

BinarySearchTree.prototype.getSuccessor = function (delNode) {
  var successorParent = delNode;
  var successor = delNode;
  var current = delNode.right;

  // 寻找 delNode 右子树的最小子节点
  while (current != null) {
    successorParent = successor;
    successor = current;
    current = current.left;
  }

  // 如果找到的后继不是 delNode 直接的有子节点
  if (successor !== delNode.right) {
    successorParent.left = successor.right;
    successor.right = delNode.right;
  }

  return successor;
}

module.exports = {
  BinarySearchTree
};

const { BinarySearchTree } = require("../../src/es5/BinarySearchTree.js");

test("测试 preorderTraversalToString 方法", () => {
  // 相当于测试了
  // insert 方法
  // preorderTraversal 方法
  // preorderTraversalNode 方法
  // preorderTraversalToString 方法
  const bst = new BinarySearchTree();
  bst.insert(11);
  bst.insert(7);
  bst.insert(15);
  bst.insert(5);
  bst.insert(3);
  bst.insert(9);
  bst.insert(8);
  bst.insert(10);
  bst.insert(13);
  bst.insert(12);
  bst.insert(14);
  bst.insert(20);
  bst.insert(18);
  bst.insert(25);
  bst.insert(6);
  expect(bst.preorderTraversalToString()).toBe("[11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]");
});

test("测试 inorderTraversalToString 方法", () => {
  const bst = new BinarySearchTree();
  bst.insert(11);
  bst.insert(7);
  bst.insert(15);
  bst.insert(5);
  bst.insert(3);
  bst.insert(9);
  bst.insert(8);
  bst.insert(10);
  bst.insert(13);
  bst.insert(12);
  bst.insert(14);
  bst.insert(20);
  bst.insert(18);
  bst.insert(25);
  bst.insert(6);
  expect(bst.inorderTraversalToString()).toBe("[3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]");
});

test("测试 postorderTraversalToString 方法", () => {
  const bst = new BinarySearchTree();
  bst.insert(11);
  bst.insert(7);
  bst.insert(15);
  bst.insert(5);
  bst.insert(3);
  bst.insert(9);
  bst.insert(8);
  bst.insert(10);
  bst.insert(13);
  bst.insert(12);
  bst.insert(14);
  bst.insert(20);
  bst.insert(18);
  bst.insert(25);
  bst.insert(6);
  expect(bst.postorderTraversalToString()).toBe("[3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11]");
});
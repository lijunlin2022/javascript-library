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

test("测试 max 方法", () => {
  const bst = new BinarySearchTree();
  expect(bst.max()).toBe(null);
  bst.insert(7);
  expect(bst.max()).toBe(7);
  bst.insert(5);
  expect(bst.max()).toBe(7);
  bst.insert(8);
  expect(bst.max()).toBe(8);
});

test("测试 min 方法", () => {
  const bst = new BinarySearchTree();
  expect(bst.max()).toBe(null);
  bst.insert(7);
  expect(bst.min()).toBe(7);
  bst.insert(5);
  expect(bst.min()).toBe(5);
  bst.insert(8);
  expect(bst.min()).toBe(5);
});

test("测试 search 方法", () => {
  const bst = new BinarySearchTree();
  expect(bst.search(0)).toBe(false);
  bst.insert(3);
  expect(bst.search(3)).toBe(true);
  bst.insert(1);
  bst.insert(8);
  expect(bst.search(9)).toBe(false);
});

test("测试 remove 方法", () => {
  const bst = new BinarySearchTree();
  expect(bst.remove(0)).toBe(false); // 测试删除空节点
  bst.insert(0);
  expect(bst.remove(0)).toBe(true); // 测试删除叶子节点同时也是根节点
  bst.insert(0);
  bst.insert(1);
  expect(bst.remove(1)).toBe(true); // 测试删除叶子节点
  bst.remove(0);

  bst.insert(3);
  bst.insert(2);
  bst.insert(1);
  expect(bst.remove(2)).toBe(true); // 测试删除有一个左子节点的节点
  expect(bst.remove(3)).toBe(true);
  bst.remove(1);

  bst.insert(4);
  bst.insert(5);
  bst.insert(6);
  expect(bst.remove(5)).toBe(true); // 测试删除有一个右子节点的节点
  expect(bst.remove(4)).toBe(true);
  bst.remove(6);

  // 测试删除有两个子节点的情况
  bst.insert(2); // 根节点
  bst.insert(1);
  bst.insert(3);
  expect(bst.inorderTraversalToString()).toBe("[1, 2, 3]");
  expect(bst.remove(2)).toBe(true);
  expect(bst.inorderTraversalToString()).toBe("[1, 3]");
  bst.remove(1);
  bst.remove(3);

  // 测试找到的后缀不是 delNode 直接的子节点
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
  bst.remove(15)
  expect(bst.inorderTraversalToString()).toBe("[3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 20, 25]");
});

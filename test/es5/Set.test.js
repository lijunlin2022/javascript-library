const { Set } = require("../../src/es5/Set");

test("测试 add 方法", () => {
  const set = new Set();
  expect(set.add("A")).toBe(true);
  expect(set.add("A")).toBe(false);
});

test("测试 remove 方法", () => {
  const set = new Set();
  expect(set.remove("A")).toBe(false);
  set.add("A");
  expect(set.remove("A")).toBe(true);
});

test("测试 has 方法", () => {
  const set = new Set();
  expect(set.has("A")).toBe(false);
  set.add("A");
  expect(set.has("A")).toBe(true);
});

test("测试 clear 方法", () => {
  const set = new Set();
  set.add("A");
  set.add("B");
  set.clear();
  expect(set.has("A")).toBe(false);
  expect(set.has("B")).toBe(false);
});

test("测试 size 方法", () => {
  const set = new Set();
  expect(set.size()).toBe(0);
  set.add("A");
  set.add("B");
  set.add("C");
  expect(set.size()).toBe(3);
});

test("测试 values 方法", () => {
  const set = new Set();
  console.log(set.values());  // 目前 JavaScript 中没有比较两个数组是否相当的方法, 所以先打印来观察
  set.add("A");
  set.add("B");
  set.add("C");
  console.log(set.values());
});

test("测试 toString 方法", () => {
  const set = new Set();
  expect(set.toString()).toBe("{}");
  set.add("A");
  set.add("B");
  set.add("C");
  expect(set.toString()).toBe("{A, B, C}");
});

// 集合间操作
test("测试 union 方法", () => {
  const setA = new Set();
  setA.add("A");
  setA.add("B");
  setA.add("C");
  const setB = new Set();
  setB.add("C");
  setB.add("D");
  setB.add("E");
  expect(setA.union(setB).toString()).toBe("{A, B, C, D, E}");
});

test("测试 intersection 方法", () => {
  const setA = new Set();
  setA.add("A");
  setA.add("B");
  setA.add("C");
  const setB = new Set();
  setB.add("C");
  setB.add("D");
  setB.add("E");
  expect(setA.intersection(setB).toString()).toBe("{C}");
});

test("测试 difference 方法", () => {
  const setA = new Set();
  setA.add("A");
  setA.add("B");
  setA.add("C");
  const setB = new Set();
  setB.add("C");
  setB.add("D");
  setB.add("E");
  expect(setA.difference(setB).toString()).toBe("{A, B}");
});

test("测试 isSubset 方法", () => {
  const setA = new Set();
  setA.add("A");
  setA.add("B");
  setA.add("C");
  const setB = new Set();
  setA.add("B");
  expect(setA.isSubset(setB)).toBe(false);
  expect(setB.isSubset(setA)).toBe(true);
});

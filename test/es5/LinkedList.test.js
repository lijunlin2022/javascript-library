const { LinkedList } = require("../../src/es5/LinkedList");

const list = new LinkedList();

test("测试 append 方法", () => {
  list.append("A");
  list.append("B");
  list.append("C");
  expect(list.toString()).toBe("[A, B, C]");
});

test("测试 insert 方法", () => {
  list.insert(0, "D");
  expect(list.toString()).toBe("[D, A, B, C]");
  list.insert(1, "F");
  expect(list.toString()).toBe("[D, F, A, B, C]");
  list.insert(5, "Z");
  expect(list.toString()).toBe("[D, F, A, B, C, Z]");
});

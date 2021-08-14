const { LinkedList } = require("../../src/es6/LinkedList");

test("测试 append 方法", () => {
  const list = new LinkedList();
  list.append("A");
  list.append("B");
  list.append("C");
  expect(list.toString()).toBe("[A, B, C]");
});

test("测试 insert 方法", () => {
  const list = new LinkedList();
  list.insert(0, "D");
  expect(list.toString()).toBe("[D]");
  list.insert(1, "F");
  expect(list.toString()).toBe("[D, F]");
  list.insert(2, "Z");
  expect(list.toString()).toBe("[D, F, Z]");
  list.insert(1, "R");
  expect(list.toString()).toBe("[D, R, F, Z]");
});

test("测试 get 方法", () => {
  const list = new LinkedList();
  list.append("A");
  list.append("B");
  list.append("C");
  expect(list.get(0)).toBe("A");
  expect(list.get(1)).toBe("B");
  expect(list.get(2)).toBe("C");
  expect(list.get(3)).toBe(null);
});

test("测试 indexOf 方法", () => {
  const list = new LinkedList();
  list.append("C");
  list.append("B");
  list.append("A");
  expect(list.indexOf("C")).toBe(0);
  expect(list.indexOf("B")).toBe(1);
  expect(list.indexOf("A")).toBe(2);
  expect(list.indexOf("O")).toBe(-1);
});

test("测试 update 方法", () => {
  const list = new LinkedList();
  list.append("A");
  list.append("B");
  list.append("C");
  expect(list.update(0, "O")).toBe(true);
  expect(list.toString()).toBe("[O, B, C]");
  expect(list.update(1, "P")).toBe(true);
  expect(list.toString()).toBe("[O, P, C]");
  expect(list.update(2, "Q")).toBe(true);
  expect(list.toString()).toBe("[O, P, Q]");
  expect(list.update(-1, "X")).toBe(false);
});

test("测试 removeAt 方法", () => {
  const list = new LinkedList();
  list.append("A");
  list.append("B");
  list.append("C");
  expect(list.removeAt(0)).toBe("A");
  expect(list.toString()).toBe("[B, C]");
  expect(list.removeAt(1)).toBe("C");
  expect(list.toString()).toBe("[B]");
  expect(list.removeAt(0)).toBe("B");
  expect(list.toString()).toBe("[]");
  expect(list.removeAt(-1)).toBe(null);
  expect(list.toString()).toBe("[]");
});

test("测试 remove 方法", () => {
  const list = new LinkedList();
  list.append("A");
  list.append("B");
  list.append("C");
  expect(list.remove("A")).toBe(0);
  expect(list.toString()).toBe("[B, C]");
  expect(list.remove("C")).toBe(1);
  expect(list.toString()).toBe("[B]");
  expect(list.remove("B")).toBe(0);
  expect(list.toString()).toBe("[]");
});

test("测试 isEmpty 方法", () => {
  const list = new LinkedList();
  list.append("A");
  list.append("B");
  expect(list.isEmpty()).toBe(false);
  list.removeAt(0);
  list.removeAt(0);
  expect(list.isEmpty()).toBe(true);
});

test("测试 size 方法", () => {
  const list = new LinkedList();
  expect(list.size()).toBe(0);
  list.append("1");
  expect(list.size()).toBe(1);
});

test("测试 toString 方法", () => {
  const list = new LinkedList();
  expect(list.toString()).toBe("[]");
  list.append("A");
  expect(list.toString()).toBe("[A]");
  list.append("B");
  expect(list.toString()).toBe("[A, B]");
});
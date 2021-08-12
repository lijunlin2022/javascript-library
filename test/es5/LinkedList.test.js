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

test("测试 get 方法", () => {
  expect(list.get(3)).toBe("B");
  expect(list.get(5)).toBe("Z");
  expect(list.get(0)).toBe("D");
});

test("测试 indexOf 方法", () => {
  expect(list.indexOf("A")).toBe(2);
  expect(list.indexOf("O")).toBe(-1);
});

test("测试 update 方法", () => {
  expect(list.update(0, "P")).toBe(true);
  expect(list.toString()).toBe("[P, F, A, B, C, Z]");
  expect(list.update(-1, "X")).toBe(false);
});

test("测试 removeAt 方法", () => {
  expect(list.removeAt(2)).toBe("A");
  expect(list.toString()).toBe("[P, F, B, C, Z]");
  expect(list.removeAt(-1)).toBe(null);
  expect(list.removeAt(0)).toBe("P");
  expect(list.toString()).toBe("[F, B, C, Z]");
});

test("测试 remove 方法", () => {
  expect(list.remove("F")).toBe(0);
  expect(list.toString()).toBe("[B, C, Z]");
  expect(list.remove("C")).toBe(1);
  expect(list.toString()).toBe("[B, Z]");
});

test("测试 isEmpty 方法", () => {
  expect(list.isEmpty()).toBe(false);
  list.removeAt(0);
  list.removeAt(0);
  expect(list.isEmpty()).toBe(true);
});

test("测试 size 方法", () => {
  expect(list.size()).toBe(0);
  list.append("1");
  expect(list.size()).toBe(1);
});


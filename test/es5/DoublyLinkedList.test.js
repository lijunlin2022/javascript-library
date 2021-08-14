const { DoublyLinkedList } = require("../../src/es5/DoublyLinkedList.js");

test("测试 append 方法", () => {
  const doublyList = new DoublyLinkedList();
  doublyList.append("A");
  expect(doublyList.toString()).toBe("[A]");
  doublyList.append("B");
  expect(doublyList.toString()).toBe("[A, B]");
});

test("测试 backwordString 方法", () => {
  const doublyList = new DoublyLinkedList();
  doublyList.append("C");
  doublyList.append("D");
  expect(doublyList.toString()).toBe("[C, D]");
  expect(doublyList.backwardString()).toBe("[C, D]");
});

test("测试 forwardString 方法", () => {
  const doublyList = new DoublyLinkedList();
  doublyList.append("D");
  doublyList.append("C");
  doublyList.append("B");
  doublyList.append("A");
  expect(doublyList.forwardString()).toBe("[A, B, C, D]");
});

test("测试 insert 方法", () => {
  const doublyList = new DoublyLinkedList();
  doublyList.insert(0, "E");
  expect(doublyList.backwardString()).toBe("[E]");
  doublyList.insert(1, "A");
  expect(doublyList.backwardString()).toBe("[E, A]");
  doublyList.insert(2, "B");
  expect(doublyList.backwardString()).toBe("[E, A, B]");
  doublyList.insert(1, "M");
  expect(doublyList.backwardString()).toBe("[E, M, A, B]");
}); 

test("测试 get 方法", () => {
  const doublyList = new DoublyLinkedList();
  doublyList.insert(0, "E");
  doublyList.insert(1, "A");
  doublyList.insert(2, "B");
  expect(doublyList.get(0)).toBe("E");
  expect(doublyList.get(1)).toBe("A");
  expect(doublyList.get(2)).toBe("B");
  expect(doublyList.get(5)).toBe(null);
});

test("测试 indexOf 方法", () => {
  const doublyList = new DoublyLinkedList();
  doublyList.insert(0, "E");
  doublyList.insert(1, "A");
  doublyList.insert(2, "B");
  expect(doublyList.indexOf("E")).toBe(0);
  expect(doublyList.indexOf("A")).toBe(1);
  expect(doublyList.indexOf("B")).toBe(2);
  expect(doublyList.indexOf("F")).toBe(-1);
});

test("测试 removeAt 方法", () => {
  const doublyList = new DoublyLinkedList();
  doublyList.insert(0, "E");
  doublyList.insert(1, "A");
  doublyList.insert(2, "B");
  expect(doublyList.removeAt(0)).toBe("E");
  expect(doublyList.toString()).toBe("[A, B]");
  expect(doublyList.removeAt(1)).toBe("B");
  expect(doublyList.toString()).toBe("[A]");
  doublyList.removeAt(0);
  expect(doublyList.toString()).toBe("[]");
});

test("测试 remove 方法", () => {
  const doublyList = new DoublyLinkedList();
  doublyList.append("1");
  doublyList.append("2");
  doublyList.append("3");
  expect(doublyList.remove("1")).toBe(0);
  expect(doublyList.remove("3")).toBe(1);
  expect(doublyList.remove("P")).toBe(-1); 
});

test("测试 isEmpty 方法", () => {
  // const doublyList = new DoublyLinkedList();
  // doublyList.append("A");
  // doublyList.append("B");
  // doublyList.append("C");
  // expect(doublyList.isEmpty()).toBe(false);
  // doublyList.removeAt(0);
  // doublyList.removeAt(0);
  // doublyList.removeAt(0);
  // expect(doublyList.isEmpty()).toBe(true);
});

test("测试 size 方法", () => {
  const doublyList = new DoublyLinkedList();
  expect(doublyList.size()).toBe(0);
  doublyList.append("A");
  expect(doublyList.size()).toBe(1);
  doublyList.append("B");
  expect(doublyList.size()).toBe(2);
});

const { Stack } = require("../../src/es6/Stack");

const stack = new Stack();

test("测试 push", () => {
  stack.push(6);
  stack.push(5);
  expect(stack.toString()).toBe("[6, 5]");
});

test("测试 pop", () => {
  const top = stack.pop();
  expect(top).toBe(5);
  expect(stack.toString()).toBe("[6]");
});

test("测试 peek", () => {
  const top = stack.peek();
  expect(top).toBe(6);
  expect(stack.toString()).toBe("[6]");
});

test("测试 isEmpty", () => {
  expect(stack.isEmpty()).toBe(false);
  stack.pop();
  expect(stack.isEmpty()).toBe(true);
});

test("测试 size", () => {
  stack.push(7);
  stack.push(8);
  stack.push(9);
  expect(stack.size()).toBe(3);
  expect(stack.toString()).toBe("[7, 8, 9]");
});

// toString() 之前已经测试过了
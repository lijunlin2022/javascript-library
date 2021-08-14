const { Stack } = require("../../src/es6/Stack");

test("测试 push", () => {
  const stack = new Stack();
  stack.push(6);
  stack.push(5);
  expect(stack.toString()).toBe("[6, 5]");
}); 

test("测试 pop", () => {
  const stack = new Stack();
  stack.push(6);
  stack.push(5);
  const top = stack.pop();
  expect(top).toBe(5);
  expect(stack.toString()).toBe("[6]");
});

test("测试 peek", () => {
  const stack = new Stack();
  stack.push(6);
  stack.push(5);
  const top = stack.peek();
  expect(top).toBe(5);
  expect(stack.toString()).toBe("[6, 5]");
});

test("测试 isEmpty", () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);
  stack.push(1);
  expect(stack.isEmpty()).toBe(false);
});

test("测试 size", () => {
  const stack = new Stack();
  stack.push(7);
  stack.push(8);
  stack.push(9);
  expect(stack.size()).toBe(3);
  expect(stack.toString()).toBe("[7, 8, 9]");
});

test("测试 toString", () => {
  const stack = new Stack();
  expect(stack.toString()).toBe("[]");
  stack.push(1);
  stack.push(2);
  expect(stack.toString()).toBe("[1, 2]");
});

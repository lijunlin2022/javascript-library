const { Queue } = require("../../src/es6/Queue");

test("测试 enqueue", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.toString()).toBe("[1, 2]");
});

test("测试 dequeue", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.dequeue()).toBe(1);
  expect(queue.toString()).toBe("[2]");
});

test("测试 front 和 back", () => {
  const queue = new Queue();
  queue.enqueue(3);
  queue.enqueue(4);
  expect(queue.front()).toBe(3);
  expect(queue.back()).toBe(4);
});

test("测试 size", () => {
  const queue = new Queue();
  expect(queue.size()).toBe(0);
  queue.enqueue(1);
  expect(queue.size()).toBe(1);
});

test("测试 isEmpty", () => {
  const queue = new Queue();
  expect(queue.isEmpty()).toBe(true);
  queue.enqueue(1);
  expect(queue.isEmpty()).toBe(false);
});

test("测试 toString", () => {
  const queue = new Queue();
  expect(queue.toString()).toBe("[]");
  queue.enqueue("A");
  queue.enqueue("B");
  expect(queue.toString()).toBe("[A, B]");
});
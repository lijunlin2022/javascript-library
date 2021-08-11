const { Queue } = require("../../src/es5/Queue");

const queue = new Queue();

test("测试 enqueue", () => {
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.toString()).toBe("[1, 2]");
});

test("测试 dequeue", () => {
  expect(queue.dequeue()).toBe(1);
  expect(queue.toString()).toBe("[2]");
});

test("测试 front", () => {
  queue.enqueue(3);
  queue.enqueue(4);
  expect(queue.front()).toBe(2);
  expect(queue.back()).toBe(4);
});

test("测试 size", () => {
  expect(queue.size()).toBe(3);
});

test("测试 isEmpty", () => {
  expect(queue.isEmpty()).toBe(false);
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  expect(queue.isEmpty()).toBe(true);
});

// toString() 在之前的例子中已经测验过了
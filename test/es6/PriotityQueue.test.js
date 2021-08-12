const { PriorityQueue } = require("../../src/es6/PriorityQueue");

const pq = new PriorityQueue();

test("测试 enqueue", () => {
  pq.enqueue("A", 1);
  pq.enqueue("B", 3);
  pq.enqueue("C", 2);
  expect(pq.toString()).toBe("[A-1, C-2, B-3]");
});

test("测试 dequeue", () => {
  expect(pq.dequeue().toString()).toBe("A-1");
});

test("测试 front", () => {
  expect(pq.front().toString()).toBe("C-2");
});

test("测试 back", () => {
  expect(pq.back().toString()).toBe("B-3");
});

test("测试 size", () => {
  expect(pq.size()).toBe(2);
  pq.dequeue();
  pq.dequeue();
  expect(pq.size()).toBe(0);
});

test("测试 isEmpty", () => {
  expect(pq.isEmpty()).toBe(true);
  pq.enqueue("D", 4);
  expect(pq.isEmpty()).toBe(false);
});

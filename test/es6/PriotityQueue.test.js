const { PriorityQueue } = require("../../src/es6/PriorityQueue");

test("测试 enqueue", () => {
  const pq = new PriorityQueue();
  pq.enqueue("A", 1);
  pq.enqueue("B", 3);
  pq.enqueue("C", 2);
  expect(pq.toString()).toBe("[A-1, C-2, B-3]");
});

test("测试 dequeue", () => {
  const pq = new PriorityQueue();
  pq.enqueue("A", 2);
  pq.enqueue("B", 1);
  expect(pq.dequeue().toString()).toBe("B-1");
  expect(pq.dequeue().toString()).toBe("A-2");
});

test("测试 front 和 back", () => {
  const pq = new PriorityQueue();
  pq.enqueue("A", 1);
  pq.enqueue("B", 2);
  expect(pq.front().toString()).toBe("A-1");
  expect(pq.back().toString()).toBe("B-2");
});

test("测试 size", () => {
  const pq = new PriorityQueue();
  pq.enqueue("A", 1);
  pq.enqueue("B", 2);
  expect(pq.size()).toBe(2);
  pq.dequeue();
  pq.dequeue();
  expect(pq.size()).toBe(0);
});

test("测试 isEmpty", () => {
  const pq = new PriorityQueue();
  expect(pq.isEmpty()).toBe(true);
  pq.enqueue("D", 4);
  expect(pq.isEmpty()).toBe(false);
});

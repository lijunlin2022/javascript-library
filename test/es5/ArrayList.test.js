const { ArrayList } = require("../../src/es5/ArrayList");

test("测试 append 方法和 toString 方法", () => {
  const arr = new ArrayList();
  arr.append("1");
  arr.append("2");
  arr.append("8");
  expect(arr.toString()).toBe("[1, 2, 8]");
})

test("测试 bubbleSort 方法", () => {
  const arr = new ArrayList();
  arr.append(66);
  arr.append(82);
  arr.append(12);
  arr.append(87);
  arr.append(100);
  arr.append(5);
  arr.append(566);
  arr.append(23);
  arr.bubbleSort();
  expect(arr.toString()).toBe("[5, 12, 23, 66, 82, 87, 100, 566]");
});

test("测试 selectionSort 方法", () => {
  const arr = new ArrayList();
  arr.append(66);
  arr.append(82);
  arr.append(12);
  arr.append(87);
  arr.append(100);
  arr.append(5);
  arr.append(566);
  arr.append(23);
  arr.selectionSort();
  expect(arr.toString()).toBe("[5, 12, 23, 66, 82, 87, 100, 566]");
});

test("测试 insertionSort 方法", () => {
  const arr = new ArrayList();
  arr.append(66);
  arr.append(82);
  arr.append(12);
  arr.append(87);
  arr.append(100);
  arr.append(5);
  arr.append(566);
  arr.append(23);
  arr.insertionSort();
  expect(arr.toString()).toBe("[5, 12, 23, 66, 82, 87, 100, 566]");
});

test("测试 shellSort 方法", () => {
  const arr = new ArrayList();
  arr.append(66);
  arr.append(82);
  arr.append(12);
  arr.append(87);
  arr.append(100);
  arr.append(5);
  arr.append(566);
  arr.append(23);
  arr.shellSort();
  expect(arr.toString()).toBe("[5, 12, 23, 66, 82, 87, 100, 566]");
});

test("测试 quickSort 方法", () => {
  const arr = new ArrayList();
  arr.append(66);
  arr.append(82);
  arr.append(12);
  arr.append(87);
  arr.append(100);
  arr.append(5);
  arr.append(566);
  arr.append(23);
  arr.quickSort();
  expect(arr.toString()).toBe("[5, 12, 23, 66, 82, 87, 100, 566]");
});

test("测试 quickSort 方法", () => {
  const arr = new ArrayList();
  arr.append(0);
  arr.quickSort();
  expect(arr.toString()).toBe("[0]");
});

test("测试 quickSort 方法", () => {
  const arr = new ArrayList();
  arr.append(0);
  arr.append(1);
  arr.append(1000);
  arr.append(48);
  arr.append(12);
  arr.append(-1);
  arr.quickSort();
  expect(arr.toString()).toBe("[-1, 0, 1, 12, 48, 1000]");
});

test("测试 quickSort 方法", () => {
  const arr = new ArrayList();
  arr.append(0);
  arr.append(-1);
  arr.append(-2);
  arr.append(-3);
  arr.append(-4);
  arr.append(-5);
  arr.quickSort();
  expect(arr.toString()).toBe("[-5, -4, -3, -2, -1, 0]");
});